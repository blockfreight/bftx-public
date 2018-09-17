<!DOCTYPE html>
<html lang="en">

<!-- Start [header] -->
<head>
    {{template "header"}}
</head>
<!-- End [header] -->

<!-- Start [content] -->

<body data-spy="scroll" data-target=".navbar-default" data-offset="100">
    <div data-spy="scroll" data-target=".navbar-default" data-offset="100">
        <!-- Start [Preloader] -->
        <div id="loading-page">
            <div id="loading-center-page">
                <div id="loading-center-absolute">
                    <div class="loader"></div>
                </div>
            </div>
        </div>
        <!-- End [Preloader] -->

        <!-- Start [content] -->
        <div class="warpper clearfix">

            <!-- Start [Navbar] -->
            <header class="navbar-header">
                {{template "navbar"}}
            </header>
            <!-- End [Navbar] -->

            {{template "content"}}

        </div>
        <!--End [content] -->

        <!-- Start [footer] -->
        <footer class="footer">
            {{template "footer"}}
        </footer>
        <!-- End [footer] -->

        <!-- jQuery -->
        <script src="/static/js/public/jquery-1.12.4.min.js"></script>
        <!-- Bootstrap Plugins -->
        <script src="/static/js/public/bootstrap.min.js"></script>
        <!-- Template Plugins -->
        <script src="/static/js/public/jquery.easing.js"></script>
        <script src="/static/js/public/wow.min.js "></script>
        <script src="/static/js/public/owl.carousel.min.js"></script>
        <script src="/static/js/public/magnific-popup.min.js"></script>
        <script src="/static/js/public/jquery.scrollUp.min.js"></script>
        <script src="/static/js/public/jquery.ajaxchimp.min.js"></script>
        <script src="/static/js/public/jquery.easy-pie-chart.js"></script>
        <!-- Main js -->
        <script src="/static/js/public/main.js"></script>
        <!-- Reload js -->
        <script src="/static/js/reload.min.js"></script>
    </div>
</body>

</html>