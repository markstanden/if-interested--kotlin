package com.ifinterested.templates

import io.ktor.server.html.*
import kotlinx.html.BODY
import kotlinx.html.FlowContent
import kotlinx.html.classes
import kotlinx.html.h1
import kotlinx.html.header
import kotlinx.html.li
import kotlinx.html.p
import kotlinx.html.ul

class HeaderTemplate : Template<BODY> {
    val title = Placeholder<FlowContent>()
    override fun BODY.apply() {
        header {
            classes = setOf("page-header")
            h1 {
                classes = setOf("header-element", "main_title__top", "top", "left")
                insert(title)
                +"{"
            }
            p {
                classes = setOf("header-element", "main_title__bottom", "bottom", "left")
                +"}"
            }
            ul {
                classes = setOf("header-element", "top", "right", "start-hidden")
                li {
                    +"Latest Posts"
                }
                li {
                    +"Github"
                }
                li {
                    +"About"
                }
            }
        }
    }
}