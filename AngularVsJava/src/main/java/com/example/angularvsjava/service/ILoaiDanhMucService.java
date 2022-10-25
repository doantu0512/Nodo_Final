package com.example.angularvsjava.service;

import com.example.angularvsjava.dto.LoaidanhmucDTO;
import com.example.angularvsjava.entity.Loaidanhmuc;
import com.example.angularvsjava.utils.Response;

import java.util.List;

public interface ILoaiDanhMucService  {
    List<Loaidanhmuc> findAll();

    Loaidanhmuc findbyId(Long id);

    Loaidanhmuc saveAndUpdate(LoaidanhmucDTO loaidanhmucDTO);

    Response deleteById(Long id);
}
