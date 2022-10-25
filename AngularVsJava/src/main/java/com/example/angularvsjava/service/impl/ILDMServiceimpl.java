package com.example.angularvsjava.service.impl;

import com.example.angularvsjava.dao.ILoaiDanhMucDAO;
import com.example.angularvsjava.dto.LoaidanhmucDTO;
import com.example.angularvsjava.entity.Loaidanhmuc;
import com.example.angularvsjava.service.ILoaiDanhMucService;

import com.example.angularvsjava.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ILDMServiceimpl implements ILoaiDanhMucService {

    @Autowired
    ILoaiDanhMucDAO ILoaiDanhMucDAO;

    @Override
    public List<Loaidanhmuc> findAll() {
        return ILoaiDanhMucDAO.findAll();
    }

    @Override
    public Loaidanhmuc findbyId(Long id) {
        return ILoaiDanhMucDAO.findById(id).orElse(null);
    }

    @Override
    public Loaidanhmuc saveAndUpdate(LoaidanhmucDTO loaidanhmucDTO) {
        Loaidanhmuc loaidanhmuc = new Loaidanhmuc();
        loaidanhmuc.setId(loaidanhmucDTO.getId());
        loaidanhmuc.setCode(loaidanhmucDTO.getCode());
        loaidanhmuc.setNametv(loaidanhmucDTO.getNametv());
        loaidanhmuc.setNameen(loaidanhmucDTO.getNameen());
        loaidanhmuc.setEffectivedate(loaidanhmucDTO.getEffectivedate());
        loaidanhmuc.setExpirationdate(loaidanhmucDTO.getExpirationdate());
        loaidanhmuc.setStatus(loaidanhmucDTO.getStatus());
        loaidanhmuc.setCreatedate(loaidanhmucDTO.getCreatedate());
        loaidanhmuc.setCreator(loaidanhmucDTO.getCreator());
        loaidanhmuc.setUpdatedate(loaidanhmucDTO.getUpdatedate());
        return ILoaiDanhMucDAO.save(loaidanhmuc);
    }

    @Override
    public Response deleteById(Long id) {
        Loaidanhmuc loaidanhmuc  = ILoaiDanhMucDAO.findById(id).orElse(null);
        if (loaidanhmuc == null) {
            return new Response("Thất bại");
        } else {
            ILoaiDanhMucDAO.deleteById(id);
            return new Response("Xóa thành công") ;
        }
    }

}
