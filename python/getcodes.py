from pittapi import course
import json

courses = { "codes" : course.get_subject_codes() }

with open("../json/codes.json", "w") as f:
    json.dump(courses, f)