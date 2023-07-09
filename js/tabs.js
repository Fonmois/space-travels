        // Изображения обьектов
        function openImage(tabImage) {
            var i;
            var x = document.getElementsByClassName("image");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            document.getElementById(tabImage).style.display = "block";
        }

        // Информация об обьектах
        function openTab(tabName) {
            var i;
            var x = document.getElementsByClassName("tabs");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            document.getElementById(tabName).style.display = "block";
        }