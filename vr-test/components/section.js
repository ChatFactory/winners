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
            url: "https://thesun.co.uk/wp-json/thesun/v1/posts/lite",
            context: document.body
        }).done(function (response) {
            var count = 0;
            $.each(response, function (i, item) {
                if (count < 4) {

                    document.querySelector('#row-one-image-' + i).setAttribute('src', 'http://hackathon-image-proxy.azurewebsites.net/?url=' + item.images.mobile.src_url);
                    //<a-link href="index.html" title="My Homepage" image="#homeThumbnail"></a-link>
                    $('#row-one').append('<a-link href="index.html" title="' + item.title + '" image="#row-one-image-'+i+'"></a-link>');

                    // $('#row-one').append('<a-image src="#row-one-image-' + i + '"></a-image>');
                    // $('#row-one').append('<a-entity text="color: black; value: ' + item.title + ';"></a-entity>');
                    console.log(item);
                }
                if (count >= 4 && count < 8) {
                    document.querySelector('#row-two-image-' + i).setAttribute('src', 'http://hackathon-image-proxy.azurewebsites.net/?url=' + item.images.mobile.src_url);
                    $('#row-two').append('<a-image src="#row-two-image-' + i + '"></a-image>');
                    $('#row-two').append('<a-entity text="color: black; value: ' + item.title + ';"></a-entity>');
                    console.log(item);
                }
                count++;
            })
            self.data.message = 'lol';
            console.log(self.data.message);
        });
    }
});