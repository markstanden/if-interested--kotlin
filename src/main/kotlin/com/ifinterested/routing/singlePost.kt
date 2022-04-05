package com.ifinterested.routing

import com.ifinterested.models.BlogPost
import com.ifinterested.models.BlogPost.Companion.asID
import com.ifinterested.templates.PageTopLevelTemplate
import io.ktor.server.application.*
import io.ktor.server.html.*
import io.ktor.server.routing.*
import io.ktor.server.util.*

fun Application.singlePost(posts: List<BlogPost>) {
    routing {
        get("posts/{dateID}") {
            val dateID = call.parameters.getOrFail<String>("dateID")
            call.respondHtmlTemplate(PageTopLevelTemplate(posts.filter { dateID == it.date.asID()})) {
                headerContent {
                    title { +"if(interested) $dateID ${posts.map { it.date.asID() }}" }
                }
                footerContent {
                    title { +"if(interested)" }
                }
            }
        }
    }
}