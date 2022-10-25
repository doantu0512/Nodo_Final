package com.example.angularvsjava.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DanhmucDTO {
    private Long id;
    private String code;
    private String nametv;
    private String nameen;
    private Long thutu;
    private String nhom;
    private java.sql.Date effectivedate;
    private java.sql.Date expirationdate;
}
