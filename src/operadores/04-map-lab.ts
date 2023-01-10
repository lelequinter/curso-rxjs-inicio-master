import { fromEvent, map, tap } from 'rxjs';

const texto = document.createElement('div');

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt accumsan aliquet. Ut feugiat felis quis mauris malesuada, et vestibulum quam pellentesque. Pellentesque suscipit tellus finibus lobortis ultrices. Curabitur venenatis aliquet enim non faucibus. Sed imperdiet eu augue sit amet imperdiet. Sed congue ex accumsan nisi fringilla aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc nibh nunc, tempor id turpis vel, lobortis iaculis turpis. Vestibulum a sodales arcu, vel posuere justo. Quisque lacinia ligula sit amet eros facilisis commodo. Morbi euismod nisl vel pellentesque venenatis. Etiam vestibulum nisi dui, quis tincidunt orci egestas faucibus. Maecenas pretium nisi vitae ipsum fermentum, quis euismod nunc elementum.
<br/>
<br/>
Ut sollicitudin metus enim, a venenatis diam molestie at. Nam ullamcorper mi vitae mauris dictum, et facilisis tellus porta. Sed ac venenatis metus. Sed dapibus sem at diam tincidunt commodo. Fusce sed ipsum a mi rhoncus laoreet. Quisque fermentum, est et iaculis tempor, felis odio varius turpis, eu varius ex tellus eu diam. Sed eu risus at ante sodales feugiat eget sit amet diam. Donec ullamcorper pretium tortor, non auctor diam sodales ac. Aenean pulvinar, odio et pharetra tristique, lectus orci volutpat nunc, nec eleifend ipsum neque id mauris. Aliquam finibus sagittis diam sodales mollis. Quisque cursus facilisis nibh eu finibus. Quisque fringilla eget mi vel tristique. Aenean accumsan id magna eget ultricies.
<br/>
<br/>
Duis faucibus erat vel ultrices tincidunt. Donec egestas ex vel ultrices imperdiet. Nullam nec dictum risus. Vivamus luctus egestas porttitor. Nunc vestibulum, dui at mollis dapibus, neque arcu condimentum magna, a hendrerit tortor purus vel mi. Fusce vestibulum augue non nisi facilisis, eget aliquet sapien ultrices. Sed vel eros et velit auctor venenatis. Nullam cursus sapien quis vestibulum semper. Nunc non ex sit amet arcu lacinia fermentum iaculis vitae tortor. Duis dictum tincidunt elit, vitae fermentum orci fermentum id. Maecenas pretium viverra maximus. Curabitur at odio non nunc ornare porttitor fringilla finibus orci. Mauris scelerisque dapibus justo, in lobortis est auctor non.
<br/>
<br/>
Quisque tempus tempus erat malesuada commodo. Sed faucibus tempus tellus, sed tempus tortor sodales vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur hendrerit lobortis nisi, vitae ullamcorper ante mollis ac. Proin porttitor enim vitae tincidunt volutpat. Integer eleifend dictum fermentum. Morbi et lacus sapien. Cras et nisl dui. Proin commodo feugiat porta. Donec iaculis luctus iaculis. Nullam blandit sem at elit tincidunt placerat. Proin et sem at odio rhoncus venenatis. In in neque quam.
<br/>
<br/>
Phasellus sed nibh tincidunt nibh tristique tristique egestas eget velit. Duis cursus dui quis consequat vulputate. Duis ullamcorper sit amet arcu ac pretium. Sed in magna tincidunt, molestie orci quis, tincidunt diam. Donec quis vestibulum mauris, nec vehicula eros. Vivamus bibendum, nibh vitae sollicitudin efficitur, lorem leo sodales turpis, vitae ornare mauris metus a mi. Praesent non quam sollicitudin, dictum augue quis, rutrum dui. Phasellus posuere, mauris nec vehicula fermentum, arcu est viverra dolor, vitae tincidunt neque enim eu mi. Donec aliquet justo lectus, fringilla blandit turpis consectetur vitae. Donec ut aliquam lacus, in congue augue. Morbi sollicitudin dapibus pharetra. Vestibulum pulvinar ante tellus, non vulputate augue tincidunt at. Etiam non odio sollicitudin, fermentum quam ornare, imperdiet nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque facilisis dignissim eros, nec cursus risus vestibulum non.
<br/>
<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt accumsan aliquet. Ut feugiat felis quis mauris malesuada, et vestibulum quam pellentesque. Pellentesque suscipit tellus finibus lobortis ultrices. Curabitur venenatis aliquet enim non faucibus. Sed imperdiet eu augue sit amet imperdiet. Sed congue ex accumsan nisi fringilla aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc nibh nunc, tempor id turpis vel, lobortis iaculis turpis. Vestibulum a sodales arcu, vel posuere justo. Quisque lacinia ligula sit amet eros facilisis commodo. Morbi euismod nisl vel pellentesque venenatis. Etiam vestibulum nisi dui, quis tincidunt orci egestas faucibus. Maecenas pretium nisi vitae ipsum fermentum, quis euismod nunc elementum.
<br/>
<br/>
Ut sollicitudin metus enim, a venenatis diam molestie at. Nam ullamcorper mi vitae mauris dictum, et facilisis tellus porta. Sed ac venenatis metus. Sed dapibus sem at diam tincidunt commodo. Fusce sed ipsum a mi rhoncus laoreet. Quisque fermentum, est et iaculis tempor, felis odio varius turpis, eu varius ex tellus eu diam. Sed eu risus at ante sodales feugiat eget sit amet diam. Donec ullamcorper pretium tortor, non auctor diam sodales ac. Aenean pulvinar, odio et pharetra tristique, lectus orci volutpat nunc, nec eleifend ipsum neque id mauris. Aliquam finibus sagittis diam sodales mollis. Quisque cursus facilisis nibh eu finibus. Quisque fringilla eget mi vel tristique. Aenean accumsan id magna eget ultricies.
<br/>
<br/>
Duis faucibus erat vel ultrices tincidunt. Donec egestas ex vel ultrices imperdiet. Nullam nec dictum risus. Vivamus luctus egestas porttitor. Nunc vestibulum, dui at mollis dapibus, neque arcu condimentum magna, a hendrerit tortor purus vel mi. Fusce vestibulum augue non nisi facilisis, eget aliquet sapien ultrices. Sed vel eros et velit auctor venenatis. Nullam cursus sapien quis vestibulum semper. Nunc non ex sit amet arcu lacinia fermentum iaculis vitae tortor. Duis dictum tincidunt elit, vitae fermentum orci fermentum id. Maecenas pretium viverra maximus. Curabitur at odio non nunc ornare porttitor fringilla finibus orci. Mauris scelerisque dapibus justo, in lobortis est auctor non.
<br/>
<br/>
Quisque tempus tempus erat malesuada commodo. Sed faucibus tempus tellus, sed tempus tortor sodales vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur hendrerit lobortis nisi, vitae ullamcorper ante mollis ac. Proin porttitor enim vitae tincidunt volutpat. Integer eleifend dictum fermentum. Morbi et lacus sapien. Cras et nisl dui. Proin commodo feugiat porta. Donec iaculis luctus iaculis. Nullam blandit sem at elit tincidunt placerat. Proin et sem at odio rhoncus venenatis. In in neque quam.
<br/>
<br/>
Phasellus sed nibh tincidunt nibh tristique tristique egestas eget velit. Duis cursus dui quis consequat vulputate. Duis ullamcorper sit amet arcu ac pretium. Sed in magna tincidunt, molestie orci quis, tincidunt diam. Donec quis vestibulum mauris, nec vehicula eros. Vivamus bibendum, nibh vitae sollicitudin efficitur, lorem leo sodales turpis, vitae ornare mauris metus a mi. Praesent non quam sollicitudin, dictum augue quis, rutrum dui. Phasellus posuere, mauris nec vehicula fermentum, arcu est viverra dolor, vitae tincidunt neque enim eu mi. Donec aliquet justo lectus, fringilla blandit turpis consectetur vitae. Donec ut aliquam lacus, in congue augue. Morbi sollicitudin dapibus pharetra. Vestibulum pulvinar ante tellus, non vulputate augue tincidunt at. Etiam non odio sollicitudin, fermentum quam ornare, imperdiet nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque facilisis dignissim eros, nec cursus risus vestibulum non.
<br/>
<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt accumsan aliquet. Ut feugiat felis quis mauris malesuada, et vestibulum quam pellentesque. Pellentesque suscipit tellus finibus lobortis ultrices. Curabitur venenatis aliquet enim non faucibus. Sed imperdiet eu augue sit amet imperdiet. Sed congue ex accumsan nisi fringilla aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc nibh nunc, tempor id turpis vel, lobortis iaculis turpis. Vestibulum a sodales arcu, vel posuere justo. Quisque lacinia ligula sit amet eros facilisis commodo. Morbi euismod nisl vel pellentesque venenatis. Etiam vestibulum nisi dui, quis tincidunt orci egestas faucibus. Maecenas pretium nisi vitae ipsum fermentum, quis euismod nunc elementum.
<br/>
<br/>
Ut sollicitudin metus enim, a venenatis diam molestie at. Nam ullamcorper mi vitae mauris dictum, et facilisis tellus porta. Sed ac venenatis metus. Sed dapibus sem at diam tincidunt commodo. Fusce sed ipsum a mi rhoncus laoreet. Quisque fermentum, est et iaculis tempor, felis odio varius turpis, eu varius ex tellus eu diam. Sed eu risus at ante sodales feugiat eget sit amet diam. Donec ullamcorper pretium tortor, non auctor diam sodales ac. Aenean pulvinar, odio et pharetra tristique, lectus orci volutpat nunc, nec eleifend ipsum neque id mauris. Aliquam finibus sagittis diam sodales mollis. Quisque cursus facilisis nibh eu finibus. Quisque fringilla eget mi vel tristique. Aenean accumsan id magna eget ultricies.
<br/>
<br/>
Duis faucibus erat vel ultrices tincidunt. Donec egestas ex vel ultrices imperdiet. Nullam nec dictum risus. Vivamus luctus egestas porttitor. Nunc vestibulum, dui at mollis dapibus, neque arcu condimentum magna, a hendrerit tortor purus vel mi. Fusce vestibulum augue non nisi facilisis, eget aliquet sapien ultrices. Sed vel eros et velit auctor venenatis. Nullam cursus sapien quis vestibulum semper. Nunc non ex sit amet arcu lacinia fermentum iaculis vitae tortor. Duis dictum tincidunt elit, vitae fermentum orci fermentum id. Maecenas pretium viverra maximus. Curabitur at odio non nunc ornare porttitor fringilla finibus orci. Mauris scelerisque dapibus justo, in lobortis est auctor non.
<br/>
<br/>
Quisque tempus tempus erat malesuada commodo. Sed faucibus tempus tellus, sed tempus tortor sodales vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur hendrerit lobortis nisi, vitae ullamcorper ante mollis ac. Proin porttitor enim vitae tincidunt volutpat. Integer eleifend dictum fermentum. Morbi et lacus sapien. Cras et nisl dui. Proin commodo feugiat porta. Donec iaculis luctus iaculis. Nullam blandit sem at elit tincidunt placerat. Proin et sem at odio rhoncus venenatis. In in neque quam.
<br/>
<br/>
Phasellus sed nibh tincidunt nibh tristique tristique egestas eget velit. Duis cursus dui quis consequat vulputate. Duis ullamcorper sit amet arcu ac pretium. Sed in magna tincidunt, molestie orci quis, tincidunt diam. Donec quis vestibulum mauris, nec vehicula eros. Vivamus bibendum, nibh vitae sollicitudin efficitur, lorem leo sodales turpis, vitae ornare mauris metus a mi. Praesent non quam sollicitudin, dictum augue quis, rutrum dui. Phasellus posuere, mauris nec vehicula fermentum, arcu est viverra dolor, vitae tincidunt neque enim eu mi. Donec aliquet justo lectus, fringilla blandit turpis consectetur vitae. Donec ut aliquam lacus, in congue augue. Morbi sollicitudin dapibus pharetra. Vestibulum pulvinar ante tellus, non vulputate augue tincidunt at. Etiam non odio sollicitudin, fermentum quam ornare, imperdiet nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque facilisis dignissim eros, nec cursus risus vestibulum non.
<br/>
<br/>
Duis faucibus erat vel ultrices tincidunt. Donec egestas ex vel ultrices imperdiet. Nullam nec dictum risus. Vivamus luctus egestas porttitor. Nunc vestibulum, dui at mollis dapibus, neque arcu condimentum magna, a hendrerit tortor purus vel mi. Fusce vestibulum augue non nisi facilisis, eget aliquet sapien ultrices. Sed vel eros et velit auctor venenatis. Nullam cursus sapien quis vestibulum semper. Nunc non ex sit amet arcu lacinia fermentum iaculis vitae tortor. Duis dictum tincidunt elit, vitae fermentum orci fermentum id. Maecenas pretium viverra maximus. Curabitur at odio non nunc ornare porttitor fringilla finibus orci. Mauris scelerisque dapibus justo, in lobortis est auctor non.
<br/>
<br/>
Quisque tempus tempus erat malesuada commodo. Sed faucibus tempus tellus, sed tempus tortor sodales vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur hendrerit lobortis nisi, vitae ullamcorper ante mollis ac. Proin porttitor enim vitae tincidunt volutpat. Integer eleifend dictum fermentum. Morbi et lacus sapien. Cras et nisl dui. Proin commodo feugiat porta. Donec iaculis luctus iaculis. Nullam blandit sem at elit tincidunt placerat. Proin et sem at odio rhoncus venenatis. In in neque quam.
<br/>
<br/>
Phasellus sed nibh tincidunt nibh tristique tristique egestas eget velit. Duis cursus dui quis consequat vulputate. Duis ullamcorper sit amet arcu ac pretium. Sed in magna tincidunt, molestie orci quis, tincidunt diam. Donec quis vestibulum mauris, nec vehicula eros. Vivamus bibendum, nibh vitae sollicitudin efficitur, lorem leo sodales turpis, vitae ornare mauris metus a mi. Praesent non quam sollicitudin, dictum augue quis, rutrum dui. Phasellus posuere, mauris nec vehicula fermentum, arcu est viverra dolor, vitae tincidunt neque enim eu mi. Donec aliquet justo lectus, fringilla blandit turpis consectetur vitae. Donec ut aliquam lacus, in congue augue. Morbi sollicitudin dapibus pharetra. Vestibulum pulvinar ante tellus, non vulputate augue tincidunt at. Etiam non odio sollicitudin, fermentum quam ornare, imperdiet nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque facilisis dignissim eros, nec cursus risus vestibulum non.
<br/>
<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt accumsan aliquet. Ut feugiat felis quis mauris malesuada, et vestibulum quam pellentesque. Pellentesque suscipit tellus finibus lobortis ultrices. Curabitur venenatis aliquet enim non faucibus. Sed imperdiet eu augue sit amet imperdiet. Sed congue ex accumsan nisi fringilla aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc nibh nunc, tempor id turpis vel, lobortis iaculis turpis. Vestibulum a sodales arcu, vel posuere justo. Quisque lacinia ligula sit amet eros facilisis commodo. Morbi euismod nisl vel pellentesque venenatis. Etiam vestibulum nisi dui, quis tincidunt orci egestas faucibus. Maecenas pretium nisi vitae ipsum fermentum, quis euismod nunc elementum.
<br/>
<br/>
Ut sollicitudin metus enim, a venenatis diam molestie at. Nam ullamcorper mi vitae mauris dictum, et facilisis tellus porta. Sed ac venenatis metus. Sed dapibus sem at diam tincidunt commodo. Fusce sed ipsum a mi rhoncus laoreet. Quisque fermentum, est et iaculis tempor, felis odio varius turpis, eu varius ex tellus eu diam. Sed eu risus at ante sodales feugiat eget sit amet diam. Donec ullamcorper pretium tortor, non auctor diam sodales ac. Aenean pulvinar, odio et pharetra tristique, lectus orci volutpat nunc, nec eleifend ipsum neque id mauris. Aliquam finibus sagittis diam sodales mollis. Quisque cursus facilisis nibh eu finibus. Quisque fringilla eget mi vel tristique. Aenean accumsan id magna eget ultricies.
<br/>
<br/>
Duis faucibus erat vel ultrices tincidunt. Donec egestas ex vel ultrices imperdiet. Nullam nec dictum risus. Vivamus luctus egestas porttitor. Nunc vestibulum, dui at mollis dapibus, neque arcu condimentum magna, a hendrerit tortor purus vel mi. Fusce vestibulum augue non nisi facilisis, eget aliquet sapien ultrices. Sed vel eros et velit auctor venenatis. Nullam cursus sapien quis vestibulum semper. Nunc non ex sit amet arcu lacinia fermentum iaculis vitae tortor. Duis dictum tincidunt elit, vitae fermentum orci fermentum id. Maecenas pretium viverra maximus. Curabitur at odio non nunc ornare porttitor fringilla finibus orci. Mauris scelerisque dapibus justo, in lobortis est auctor non.
<br/>
<br/>
Quisque tempus tempus erat malesuada commodo. Sed faucibus tempus tellus, sed tempus tortor sodales vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur hendrerit lobortis nisi, vitae ullamcorper ante mollis ac. Proin porttitor enim vitae tincidunt volutpat. Integer eleifend dictum fermentum. Morbi et lacus sapien. Cras et nisl dui. Proin commodo feugiat porta. Donec iaculis luctus iaculis. Nullam blandit sem at elit tincidunt placerat. Proin et sem at odio rhoncus venenatis. In in neque quam.
<br/>
<br/>
Phasellus sed nibh tincidunt nibh tristique tristique egestas eget velit. Duis cursus dui quis consequat vulputate. Duis ullamcorper sit amet arcu ac pretium. Sed in magna tincidunt, molestie orci quis, tincidunt diam. Donec quis vestibulum mauris, nec vehicula eros. Vivamus bibendum, nibh vitae sollicitudin efficitur, lorem leo sodales turpis, vitae ornare mauris metus a mi. Praesent non quam sollicitudin, dictum augue quis, rutrum dui. Phasellus posuere, mauris nec vehicula fermentum, arcu est viverra dolor, vitae tincidunt neque enim eu mi. Donec aliquet justo lectus, fringilla blandit turpis consectetur vitae. Donec ut aliquam lacus, in congue augue. Morbi sollicitudin dapibus pharetra. Vestibulum pulvinar ante tellus, non vulputate augue tincidunt at. Etiam non odio sollicitudin, fermentum quam ornare, imperdiet nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque facilisis dignissim eros, nec cursus risus vestibulum non.
<br/>
<br/>
Duis faucibus erat vel ultrices tincidunt. Donec egestas ex vel ultrices imperdiet. Nullam nec dictum risus. Vivamus luctus egestas porttitor. Nunc vestibulum, dui at mollis dapibus, neque arcu condimentum magna, a hendrerit tortor purus vel mi. Fusce vestibulum augue non nisi facilisis, eget aliquet sapien ultrices. Sed vel eros et velit auctor venenatis. Nullam cursus sapien quis vestibulum semper. Nunc non ex sit amet arcu lacinia fermentum iaculis vitae tortor. Duis dictum tincidunt elit, vitae fermentum orci fermentum id. Maecenas pretium viverra maximus. Curabitur at odio non nunc ornare porttitor fringilla finibus orci. Mauris scelerisque dapibus justo, in lobortis est auctor non.
<br/>
<br/>
Quisque tempus tempus erat malesuada commodo. Sed faucibus tempus tellus, sed tempus tortor sodales vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur hendrerit lobortis nisi, vitae ullamcorper ante mollis ac. Proin porttitor enim vitae tincidunt volutpat. Integer eleifend dictum fermentum. Morbi et lacus sapien. Cras et nisl dui. Proin commodo feugiat porta. Donec iaculis luctus iaculis. Nullam blandit sem at elit tincidunt placerat. Proin et sem at odio rhoncus venenatis. In in neque quam.
<br/>
<br/>
Phasellus sed nibh tincidunt nibh tristique tristique egestas eget velit. Duis cursus dui quis consequat vulputate. Duis ullamcorper sit amet arcu ac pretium. Sed in magna tincidunt, molestie orci quis, tincidunt diam. Donec quis vestibulum mauris, nec vehicula eros. Vivamus bibendum, nibh vitae sollicitudin efficitur, lorem leo sodales turpis, vitae ornare mauris metus a mi. Praesent non quam sollicitudin, dictum augue quis, rutrum dui. Phasellus posuere, mauris nec vehicula fermentum, arcu est viverra dolor, vitae tincidunt neque enim eu mi. Donec aliquet justo lectus, fringilla blandit turpis consectetur vitae. Donec ut aliquam lacus, in congue augue. Morbi sollicitudin dapibus pharetra. Vestibulum pulvinar ante tellus, non vulputate augue tincidunt at. Etiam non odio sollicitudin, fermentum quam ornare, imperdiet nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque facilisis dignissim eros, nec cursus risus vestibulum non.
<br/>
<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt accumsan aliquet. Ut feugiat felis quis mauris malesuada, et vestibulum quam pellentesque. Pellentesque suscipit tellus finibus lobortis ultrices. Curabitur venenatis aliquet enim non faucibus. Sed imperdiet eu augue sit amet imperdiet. Sed congue ex accumsan nisi fringilla aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc nibh nunc, tempor id turpis vel, lobortis iaculis turpis. Vestibulum a sodales arcu, vel posuere justo. Quisque lacinia ligula sit amet eros facilisis commodo. Morbi euismod nisl vel pellentesque venenatis. Etiam vestibulum nisi dui, quis tincidunt orci egestas faucibus. Maecenas pretium nisi vitae ipsum fermentum, quis euismod nunc elementum.
<br/>
<br/>
Ut sollicitudin metus enim, a venenatis diam molestie at. Nam ullamcorper mi vitae mauris dictum, et facilisis tellus porta. Sed ac venenatis metus. Sed dapibus sem at diam tincidunt commodo. Fusce sed ipsum a mi rhoncus laoreet. Quisque fermentum, est et iaculis tempor, felis odio varius turpis, eu varius ex tellus eu diam. Sed eu risus at ante sodales feugiat eget sit amet diam. Donec ullamcorper pretium tortor, non auctor diam sodales ac. Aenean pulvinar, odio et pharetra tristique, lectus orci volutpat nunc, nec eleifend ipsum neque id mauris. Aliquam finibus sagittis diam sodales mollis. Quisque cursus facilisis nibh eu finibus. Quisque fringilla eget mi vel tristique. Aenean accumsan id magna eget ultricies.
<br/>
<br/>
Duis faucibus erat vel ultrices tincidunt. Donec egestas ex vel ultrices imperdiet. Nullam nec dictum risus. Vivamus luctus egestas porttitor. Nunc vestibulum, dui at mollis dapibus, neque arcu condimentum magna, a hendrerit tortor purus vel mi. Fusce vestibulum augue non nisi facilisis, eget aliquet sapien ultrices. Sed vel eros et velit auctor venenatis. Nullam cursus sapien quis vestibulum semper. Nunc non ex sit amet arcu lacinia fermentum iaculis vitae tortor. Duis dictum tincidunt elit, vitae fermentum orci fermentum id. Maecenas pretium viverra maximus. Curabitur at odio non nunc ornare porttitor fringilla finibus orci. Mauris scelerisque dapibus justo, in lobortis est auctor non.
<br/>
<br/>
Quisque tempus tempus erat malesuada commodo. Sed faucibus tempus tellus, sed tempus tortor sodales vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur hendrerit lobortis nisi, vitae ullamcorper ante mollis ac. Proin porttitor enim vitae tincidunt volutpat. Integer eleifend dictum fermentum. Morbi et lacus sapien. Cras et nisl dui. Proin commodo feugiat porta. Donec iaculis luctus iaculis. Nullam blandit sem at elit tincidunt placerat. Proin et sem at odio rhoncus venenatis. In in neque quam.
<br/>
<br/>
Phasellus sed nibh tincidunt nibh tristique tristique egestas eget velit. Duis cursus dui quis consequat vulputate. Duis ullamcorper sit amet arcu ac pretium. Sed in magna tincidunt, molestie orci quis, tincidunt diam. Donec quis vestibulum mauris, nec vehicula eros. Vivamus bibendum, nibh vitae sollicitudin efficitur, lorem leo sodales turpis, vitae ornare mauris metus a mi. Praesent non quam sollicitudin, dictum augue quis, rutrum dui. Phasellus posuere, mauris nec vehicula fermentum, arcu est viverra dolor, vitae tincidunt neque enim eu mi. Donec aliquet justo lectus, fringilla blandit turpis consectetur vitae. Donec ut aliquam lacus, in congue augue. Morbi sollicitudin dapibus pharetra. Vestibulum pulvinar ante tellus, non vulputate augue tincidunt at. Etiam non odio sollicitudin, fermentum quam ornare, imperdiet nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque facilisis dignissim eros, nec cursus risus vestibulum non.
`;

// Añadiendo contenido al html para tener scroll
const body = document.querySelector('body');
body.append(texto);

// Creando el progressBar y anadiendolo al html
const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
    // console.log(event);
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    // console.log(scrollTop, scrollHeight, clientHeight);

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// Streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    // map(event => calcularPorcentajeScroll(event))
    map(calcularPorcentajeScroll),
    tap(x => console.log(x))
);

progress$.subscribe(procentaje => {
    progressBar.style.width = `${procentaje}%`;
})
