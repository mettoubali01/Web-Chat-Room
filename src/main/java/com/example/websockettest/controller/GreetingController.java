package com.example.websockettest.controller;

import com.example.websockettest.domain.Greeting;
import com.example.websockettest.domain.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;

@RestController
@CrossOrigin("*")
public class GreetingController {
    ArrayList<Message> msg = new ArrayList<>();

    //send the msg back to the the subscriber of the channel or to the endpoint 'topic/greeting'
    @MessageMapping("/sendMsg")
    @SendTo("/topic/greeting")
    public Message greeting(Message message) throws Exception {
        msg.add(message);
        Thread.sleep(1000);
        return new Message(message.getContent(), message.getUser());
    }

    //this method show all the method to non subscribers
    @RequestMapping("/topic/greetings")
    @ResponseBody
    public ArrayList<Message> messages() throws Exception {
        Thread.sleep(1000);
        return msg;
    }
}
