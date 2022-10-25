package com.example.angularvsjava.controller;

import com.example.angularvsjava.dto.LoaidanhmucDTO;
import com.example.angularvsjava.entity.Loaidanhmuc;
import com.example.angularvsjava.service.ILoaiDanhMucService;

import com.example.angularvsjava.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@EnableAutoConfiguration
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/ldm")
public class LoaiDanhMucController {
    @Autowired
    ILoaiDanhMucService iLoaiDanhMucService;
    @GetMapping()
    public List<Loaidanhmuc> dd (){
        return this.iLoaiDanhMucService.findAll();
    }

//    @GetMapping()
//    public Response findAll() {
//        return Response.success("Lấy thông tin thành công").withData(iLoaiDanhMucService.findAll());
//    }
//
//    @GetMapping("{id}")
//    public Response findById(@PathVariable Long id) {
//        Loaidanhmuc loaidanhmuc = iLoaiDanhMucService.findbyId(id);
//        if (loaidanhmuc == null) {
//            return Response.warning("Không tìm thấy bản ghi");
//        } else {
//            return Response.success("Lấy thông tin theo id thành công").withData(loaidanhmuc);
//        }
//    }
//
//
//    @PostMapping()
//    @ResponseStatus(HttpStatus.CREATED)
//    public Response saveOrUpdate(@RequestBody LoaidanhmucDTO form) {
//        return Response.success("Thêm mới thành công").withData(iLoaiDanhMucService.saveAndUpdate(form));
//    }
//
//    @PutMapping("{id}")
//    public Response update(@RequestBody LoaidanhmucDTO form) {
//        return Response.success("Cập nhật thành công").withData(iLoaiDanhMucService.saveAndUpdate(form));
//    }
//
//    @DeleteMapping(path = "/{id}")
//    @ResponseStatus(HttpStatus.OK)
//    public Response delete(@PathVariable Long id) {
//        return iLoaiDanhMucService.deleteById(id);
//    }
}