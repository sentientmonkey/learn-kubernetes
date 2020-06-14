package com.sentientmonkey.hello

import org.springframework.web.bind.annotation.*


@RestController
class HelloController(val greetingService: GreetingService) {
    @GetMapping("/api/hello")
    @ResponseBody
    fun get() = greetingService.get()

    @PutMapping("/api/hello")
    @ResponseBody
    fun put(@RequestBody newGreeting: Greeting) = greetingService.put(newGreeting)
}