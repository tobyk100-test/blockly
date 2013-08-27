"""Blockly Demo: Storage

Copyright 2012 Google Inc.
http://blockly.googlecode.com/

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
"""

"""Store and retrieve XML with App Engine.
"""

__author__ = "q.neutron@gmail.com (Quynh Neutron)"

import webapp2
from random import randint
from google.appengine.ext import db
from google.appengine.api import memcache
import logging

class Xml(db.Model):
  # A row in the database.
  xml_hash = db.IntegerProperty()
  xml_content = db.TextProperty()

class StorageHandler(webapp2.RequestHandler):
  @staticmethod
  def keyGen():
    # Generate a random string of length KEY_LEN.
    KEY_LEN = 6
    CHARS = "abcdefghijkmnopqrstuvwxyz23456789" # Exclude l, 0, 1.
    max_index = len(CHARS) - 1
    return "".join([CHARS[randint(0, max_index)] for x in range(KEY_LEN)])

  @staticmethod
  def uniqueKey():
    trials = 0
    result = True
    while result:
      trials += 1
      if trials == 100:
        raise Exception("Sorry, the generator failed to get a key for you.")
      xml_key = StorageHandler.keyGen()
      result = Xml.get_by_key_name(xml_key)
    return xml_key

  def post(self):
    if self.request.get("key"): self.get()  # Only retrieves data.
    xml_content = self.request.get("xml")
    xml_hash = hash(xml_content)
    lookup_query = db.Query(Xml)
    lookup_query.filter("xml_hash =", xml_hash)
    lookup_result = lookup_query.get()
    if lookup_result:
      xml_key = lookup_result.key().name()
    else:
      xml_key = StorageHandler.uniqueKey()
      xml = db.Text(xml_content)
      row = Xml(key_name = xml_key, xml_hash = xml_hash, xml_content = xml)
      row.put()
    self.response.headers['Content-Type'] = 'text/html\n'
    self.response.write(xml_key)

  def get(self):
    key_provided = self.request.get("key")
    key_provided = key_provided.lower().strip()
    xml = memcache.get("XML_" + key_provided)
    if xml is None:
      result = Xml.get_by_key_name(key_provided)
      if result:
        xml = result.xml_content
        if not memcache.add("XML_" + key_provided, xml, 3600):
          logging.error("Memcache set failed.")
      else:
        logging.info("Key doesn't exist, returning empty xml")
        xml = ""
    self.response.headers['Content-Type'] = 'text/xml\n'
    self.response.write(xml)

app = webapp2.WSGIApplication([('/storage', StorageHandler)], debug=True)
