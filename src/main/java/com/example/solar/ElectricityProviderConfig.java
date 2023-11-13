package com.example.solar;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class ElectricityProviderConfig {
    @Bean
    CommandLineRunner commandLineRunner(MyRepository repository){
        return args ->{
//        MyEntity entity1=new MyEntity(4,"mescom",9);
        MyEntity entity2=new MyEntity("Hubli electricity Supply Company Ltd",8);
//        repository.saveAll(List.of(entity2));
        };
    }
}
