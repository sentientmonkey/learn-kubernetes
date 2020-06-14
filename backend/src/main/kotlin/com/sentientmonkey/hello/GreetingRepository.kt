package com.sentientmonkey.hello

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class Greeting(
        @Id
        @GeneratedValue(strategy = GenerationType.SEQUENCE)
        val id: Long? = null,
        val message: String
)

@Repository
interface GreetingRepository : CrudRepository<Greeting, Long> {
    fun findFirstBy(): Greeting?
}