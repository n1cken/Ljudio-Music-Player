package com.group4.ljudio.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;


@Data //Getters and Setters
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "searchhistory")



public class Search {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String searchedValue;

    public String getSearchedValue() {
        return searchedValue;
    }

    public void setSearchedValue(String searchedValue) {
        this.searchedValue = searchedValue;
    }

    public Search(String searchedValue) {
        this.searchedValue = searchedValue;


    }
}


