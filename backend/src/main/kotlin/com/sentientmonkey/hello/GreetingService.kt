package com.sentientmonkey.hello

import org.springframework.stereotype.Service

@Service
class GreetingService(
        val greetingRepository: GreetingRepository
) {
    fun get(): Greeting {
        return greetingRepository.findFirstBy() ?: Greeting(message = "Hello!")
    }

    fun put(newGreeting: Greeting): Greeting {
        val greeting = greetingRepository.findFirstBy() ?: Greeting(message = "Hello!")
        return greetingRepository.save(greeting.copy(message = newGreeting.message))
    }
}