package com.ifinterested.templates

import io.ktor.server.html.*
import kotlinx.html.BODY
import kotlinx.html.FlowContent
import kotlinx.html.a
import kotlinx.html.footer
import kotlinx.html.h2
import kotlinx.html.li
import kotlinx.html.ul

class FooterTemplate : Template<BODY> {
    val title = Placeholder<FlowContent>()

    override fun BODY.apply() {
        footer {
            h2 { insert(title) }
            ul {
                +"Links"
                li { a(href = "https://markstanden.dev") { +"Personal Page" } }
                li { a(href = "https://github.com/markstanden") { +"Github" } }

            }
        }
    }
}