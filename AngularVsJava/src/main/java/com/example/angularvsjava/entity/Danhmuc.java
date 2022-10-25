package com.example.angularvsjava.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "DANHMUC_KANZY")
public class Danhmuc {
    @Id
    @Column(name = "ID")
    private Long id;

    @Column(name = "CODE")
    private String code;

    @Column(name = "NAMETV")
    private String nametv;

    @Column(name = "NAMEEN")
    private String nameen;

    @Column(name = "THUTU")
    private Long thutu;

    @Column(name = "NHOM")
    private String nhom;

    @Column(name = "EFFECTIVEDATE")
    private java.sql.Date effectivedate;

    @Column(name = "EXPIRATIONDATE")
    private java.sql.Date exprrationdate;
    }
