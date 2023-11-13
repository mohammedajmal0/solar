package com.example.solar;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name="electricity")

public class MyEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "tariff")
    private int tariff;

    public MyEntity() {
    }

    @Override
    public String toString() {
        return "MyEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", tariff=" + tariff +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MyEntity entity = (MyEntity) o;
        return id == entity.id && tariff == entity.tariff && Objects.equals(name, entity.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, tariff);
    }

    public MyEntity(int id, String name, int tariff) {
        this.id = id;
        this.name = name;
        this.tariff = tariff;
    }

    public MyEntity(String name, int tariff) {
        this.name = name;
        this.tariff = tariff;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getTariff() {
        return tariff;
    }

    public void setTariff(int tariff) {
        this.tariff = tariff;
    }
}
