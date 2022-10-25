package com.example.angularvsjava.dao;

import com.example.angularvsjava.entity.Loaidanhmuc;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ILoaiDanhMucDAO extends JpaRepository<Loaidanhmuc,Long> {
}
