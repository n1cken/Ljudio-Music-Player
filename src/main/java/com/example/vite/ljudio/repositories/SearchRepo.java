package com.example.vite.ljudio.repositories;


import com.example.vite.ljudio.entities.Search;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SearchRepo extends JpaRepository<Search, Integer> {

    Search getAllById(int Id);

}
