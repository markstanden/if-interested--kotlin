package com.ifinterested.routing

import com.ifinterested.models.BlogPost
import com.ifinterested.models.BlogPost.Companion.asID
import com.ifinterested.models.BlogPost.Companion.asURL
import com.ifinterested.templates.PageTopLevelTemplate
import io.ktor.server.application.*
import io.ktor.server.html.*
import io.ktor.server.routing.*
import io.ktor.server.util.*

fun Application.singlePost(posts: List<BlogPost>) {
    routing {
        get("posts/{dateID}/{title}/") {
            val dateID = call.parameters.getOrFail<String>("dateID")
            val title = call.parameters.getOrFail<String>("title")
            val filteredPosts = posts.filter { dateID == it.date.asID()}.filter { title == it.title.asURL() }
            call.respondHtmlTemplate(PageTopLevelTemplate(filteredPosts)) {
                headerContent {
                    title { +"if(interested) { ${filteredPosts.first().title} }" }
                }
                footerContent {
                    title { +"${filteredPosts.first().title}" }
                }
            }
        }
    }
}