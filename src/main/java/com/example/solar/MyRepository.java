package com.example.solar;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MyRepository extends JpaRepository<MyEntity,Long> {
    @Query(value = "select e.tariff from MyEntity e where e.name = :name")
    float findTariffByName(@Param("name") String name);
//Optional<MyEntity> findMyEntityByNameEquals(String name);
}
