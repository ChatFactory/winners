AFRAME.registerComponent('section', {
    schema: {
        message: {
            type: 'string',
            default: 'Hello, World!'
        }
    },

    init: function () {
        var self = this;
        $.ajax({
            url: "http://hackathon-image-proxy.azurewebsites.net/?url=https://thesun.co.uk/wp-json/thesun/v1/posts/lite",
            context: document.body
        }).done(function (response) {
            var count = 0;
            $.each(response, function (i, item) {
                if(item.images.mobile.src_url !== undefined){
                    if (count < 3) {
                        document.querySelector('#row-one-image-' + i).setAttribute('src', 'http://hackathon-image-proxy.azurewebsites.net/?url=' + item.images.mobile.src_url);
                        $('#row-one').append('<a-image src="#row-one-image-' + i + '" geometry="primitive: box; height: 1; width: 2; depth: 1;"><a-entity position="0 0.3 -0.2" text="color: white; value: ' + item.title + ';"></a-entity></a-image>');
                        $('#row-one').append('<a-entity text="color: black; value: "";"></a-entity>');
                    }
                    if (count >= 4 && count < 7) {
                        document.querySelector('#row-two-image-' + i).setAttribute('src', 'http://hackathon-image-proxy.azurewebsites.net/?url=' + item.images.mobile.src_url);
                        $('#row-two').append('<a-image src="#row-two-image-' + i + '" geometry="primitive: box; height: 1; width: 2; depth: 1;"><a-entity position="0 0.3 -0.2" text="color: white; value: ' + item.title + ';"></a-entity></a-image>');
                        $('#row-two').append('<a-entity text="color: black; value: "";"></a-entity>');
                    }
                }
                count++;
                console.log(item);
            })
            self.data.message = 'lol';
            console.log(self.data.message);
        });
    }
});