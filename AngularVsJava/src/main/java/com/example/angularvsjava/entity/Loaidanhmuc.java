package com.example.angularvsjava.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "LOAIDANHMUC_KANZY")
public class Loaidanhmuc {
    @Id
    @Column(name = "ID")
    private Long id;

    @Column(name = "CODE")
    private String code;

    @Column(name = "NAMETV")
    private String nametv;

    @Column(name = "NAMEEN")
    private String nameen;

    @Column(name = "EFFECTIVEDATE")
    private java.sql.Date effectivedate;

    @Column(name = "EXPIRATIONDATE")
    private java.sql.Date expirationdate;

    @Column(name = "STATUS")
    private String status;

    @Column(name = "CREATEDATE")
    private java.sql.Date createdate;

    @Column(name = "CREATOR")
    private String creator;

    @Column(name = "UPDATEDATE")
    private java.sql.Date updatedate;
}
