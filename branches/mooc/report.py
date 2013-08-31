"""Blockly Demo: Report

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

"""Store reports about code written by users.
"""

__author__ = "ellen.spertus@gmail.com (Ellen Spertus)"

import webapp2
import logging
from collections import Counter, OrderedDict
import json

from google.appengine.ext import ndb

class Report(ndb.Model):
  identifier = ndb.FloatProperty()
  application = ndb.StringProperty()
  date = ndb.DateTimeProperty(auto_now_add=True)
  level = ndb.IntegerProperty()
  result = ndb.BooleanProperty()
  # StringProperty is limited to 500 characters, so use TextProperty.
  program = ndb.TextProperty()

class ReportHandler(webapp2.RequestHandler):
  def post(self):
    try:
      application = self.request.get("app")
      level = int(self.request.get("level"))
      result = self.request.get("result") == "true"
      program = self.request.get("program")
      row = Report(application = application, level = level, result = result,
          program = program)
      row.put()
    except ValueError:
      logging.error("Unable to extract all form fields.")

  def get(self):
    level = int(self.request.get("level", 1))
    logging.debug("Level requested: {0}".format(level))
    app = self.request.get("app", "maze")

    reports = Report.query(Report.level == level, Report.application == app)
    results = {report.program: report.result for report in reports}
    counts = Counter([report.program for report in reports])
    results_and_counts = {program: (results[program], counts[program])
                          for program in counts.keys()}
    self.response.headers['Content-Type'] = 'text/json'
    logging.debug("Sending {0} to client".format(json.dumps(results_and_counts)))
    self.response.write(json.dumps(results_and_counts))

app = webapp2.WSGIApplication([('/report', ReportHandler)], debug=True)
