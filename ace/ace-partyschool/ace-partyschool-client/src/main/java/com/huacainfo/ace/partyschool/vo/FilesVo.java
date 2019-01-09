package com.huacainfo.ace.partyschool.vo;

import com.huacainfo.ace.partyschool.model.Files;
import com.huacainfo.ace.partyschool.model.Student;
import com.huacainfo.ace.partyschool.model.Teacher;


public class FilesVo extends Files {
    private static final long serialVersionUID = 1L;
    private Student student;

    private Teacher teacher;

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }
}
