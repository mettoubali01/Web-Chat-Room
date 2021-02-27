package com.example.websockettest.domain;

public class Message {

    private String content;
    private String user;

    public Message() {}

    public Message(String content) {
        this.content = content;
    }

    public Message(String content, String user) {
        this.content = content;
        this.user = user;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }
}
