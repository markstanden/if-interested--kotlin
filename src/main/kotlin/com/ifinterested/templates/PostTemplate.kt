package com.ifinterested.templates

import com.ifinterested.posts.PostData
import io.ktor.server.application.*
import io.ktor.server.html.*
import io.ktor.server.routing.*
import kotlinx.html.*
import kotlinx.html.*

class PostTemplate: Template<FlowContent> {
    val postTitle = Placeholder<FlowContent>()
    val postBody = Placeholder<FlowContent>()
    override fun FlowContent.apply() {
        article {
            h2(classes = "post-title") {
                insert(postTitle)
            }
            p(classes = "post-body") {
                insert(postBody)
            }
        }
    }
}