package com.lab01.cloudresume.backend;

import org.springframework.stereotype.Component;
import software.amazon.awssdk.enhanced.dynamodb.DynamoDbEnhancedClient;
import software.amazon.awssdk.enhanced.dynamodb.DynamoDbTable;
import software.amazon.awssdk.enhanced.dynamodb.TableSchema;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.dynamodb.DynamoDbClient;
import software.amazon.awssdk.services.dynamodb.model.DynamoDbException;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Component
public class DynamoDBService {
    private DynamoDbClient getClient() {
        Region region = Region.US_EAST_1;
        return DynamoDbClient.builder()
                .region(region)
                .build();
    }
    // Get All items from the DynamoDB table.
    public Integer getCounter() {
        DynamoDbEnhancedClient enhancedClient = DynamoDbEnhancedClient.builder()
                .dynamoDbClient(getClient())
                .build();

        try{
            DynamoDbTable<Counter> table = enhancedClient.table("cloud_resume_visit_counter", TableSchema.fromBean(Counter.class));
            Optional<Counter> counterOptional = table.scan().items().stream().filter(c-> c.getCounter_id().equals("1001")).findFirst();
            Counter counter;
            if(counterOptional.isEmpty()) {
               counter = new Counter("1001", 0);
            } else {
                counter = counterOptional.get();
            }
            counter.incrementCounter();
            table.putItem(counter);
            return counter.getCounter();
        } catch (DynamoDbException e) {
            System.err.println(e.getMessage());
        }
        return 1;
    }
}
