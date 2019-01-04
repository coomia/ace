package com.huacainfo.ace.partyschool.vo;

import com.huacainfo.ace.common.model.BaseModel;
import com.huacainfo.ace.partyschool.model.Student;
import com.huacainfo.ace.partyschool.model.Teacher;

/**
 * @Auther: Arvin
 * @Date: 2019/1/4 17:08
 * @Description:
 */
public class AccountVo extends BaseModel {

    //身份标识 student- 学员 ，teacher-教职工 admin-管理员
    private String regType;

    /**
     * 微信头像
     */
    private String avatarUrl;
    /**
     * 微信昵称
     */
    private String nickName;
    /**
     * 学员信息
     */
    private StudentVo student;
    /**
     * 教职工信息
     */
    private TeacherVo teacher;

    public StudentVo getStudent() {
        return student;
    }

    public void setStudent(StudentVo student) {
        this.student = student;
    }

    public TeacherVo getTeacher() {
        return teacher;
    }

    public void setTeacher(TeacherVo teacher) {
        this.teacher = teacher;
    }

    public String getRegType() {
        return regType;
    }

    public void setRegType(String regType) {
        this.regType = regType;
    }

    public String getAvatarUrl() {
        return avatarUrl;
    }

    public void setAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }
}
