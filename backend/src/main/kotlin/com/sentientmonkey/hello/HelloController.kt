package com.sentientmonkey.hello

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController

data class Greeting(
    val greeting: String
)

@RestController
class HelloController {
    @GetMapping("/api/hello")
    @ResponseBody
    fun get() = Greeting("Hello, guest")
}