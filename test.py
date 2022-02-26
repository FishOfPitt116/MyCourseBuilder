from pittapi import course

courses = course.get_course_sections("2231", "MATH", "1530")
print("\n\n")
for section in courses.sections:
    try:
        print(section.instructor)
    except:
        pass