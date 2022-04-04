package com.ifinterested

import org.junit.jupiter.api.Test

@Test
fun String.basePageTests() {
    assert(this.contains("""<html lang="en">""")) { "Returned page should contain an opening html tag" }
    assert(this.contains("</html>")) { "Returned page should contain a closing html tag" }
    assert(this.contains("<head")) { "Returned page should contain an opening head tag" }
    assert(this.contains("</head>")) { "Returned page should contain a closing head tag" }
    assert(this.contains("<header")) { "Returned page should contain an opening header tag" }
    assert(this.contains("</header>")) { "Returned page should contain a closing header tag" }
    assert(this.contains("<main")) { "Returned page should contain an opening main tag" }
    assert(this.contains("</main>")) { "Returned page should contain a closing main tag" }
    assert(this.contains("<footer")) { "Returned page should contain an opening footer tag" }
    assert(this.contains("</footer>")) { "Returned page should contain a closing footer tag" }
}