package com.example.angularvsjava.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class LoaidanhmucDTO {
    private Long id;
    private String code;
    private String nametv;
    private String nameen;
    private java.sql.Date effectivedate;
    private java.sql.Date expirationdate;
    private String status;
    private java.sql.Date createdate;
    private String creator;
    private java.sql.Date updatedate;
}
