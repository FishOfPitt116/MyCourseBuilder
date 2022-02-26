from pittapi import course

CScourses = (course.get_courses("2231", "CS"))
cs_0007 = CScourses.courses['0007']
sectionDet = course.get_extra_section_details(section=cs_0007.sections[0] , term="2231", class_number="0007")
for CSnumber, CScourse in CScourses.courses.items():
    if int(CSnumber) >= 2000:
        break
    try:
        sectionDet = course.get_extra_section_details(section=CScourse.sections[0] , term="2231", class_number=CSnumber)
        print(CSnumber, ": ", sectionDet.preqs)
    except:
        print(CSnumber, ": ", "error")
# cs_0007 = CScourses.courses['0447']
# sectionDet = course.get_extra_section_details(section=cs_0007.sections[0] , term="2231", class_number="1501")
#sectionDet = course.get_section_details('2231', cs_0007.sections[0].class_number)
# print(sectionDet)
# print(sectionDet.preqs)
#print(cs_0007)
# If starts c or p, CS 