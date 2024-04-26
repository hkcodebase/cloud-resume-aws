package com.lab01.cloudresume.backend;

import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbBean;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbPartitionKey;

@DynamoDbBean
public class Counter {
    private String counter_id;
    private Integer counter;
    @DynamoDbPartitionKey
    public String getCounter_id() {
        return counter_id;
    }
    public void setCounter_id(String counter_id) {
        this.counter_id = counter_id;
    }
    public Integer getCounter() {
        return counter;
    }
    public void setCounter(Integer counter) {
        this.counter = counter;
    }

    public void incrementCounter(){
        this.counter++;
    }
    public Counter(String counter_id, Integer counter) {
        this.counter_id = counter_id;
        this.counter = counter;
    }
    public Counter(){

    }
}
