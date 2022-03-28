Giới thiệu về cấu trúc dự án ReactJs
Khi làm việc trên React, chúng tôi luôn nghĩ đến việc làm cho các dự án của mình có cấu trúc phù hợp. Hầu như mọi lúc, ứng dụng tạo phản ứng mà chúng tôi sử dụng để tạo ứng dụng không có cấu hình bản dựng. Trong blog này, chúng tôi sẽ xây dựng bảng mẫu của chúng tôi. Chúng tôi sẽ sử dụng một số cấu trúc bảng chuẩn tốt nhất mà hầu hết cộng đồng phản ứng ưa thích.

Làm thế nào để cấu trúc dự án React?
Chúng tôi đã đọc nhiều bài báo trong đó mỗi bài viết giải thích về boilerplate và chúng tôi có thể bối rối về cách tiếp cận tốt nhất.

Một quy trình được sử dụng để tăng chất lượng của một phần mềm hoặc một sản phẩm và để cải thiện nó bằng cách xác định các khiếm khuyết, sự cố và lỗi. Nhấp để khám phá về, Kiểm tra đơn vị Javascript và ReactJS, TDD và BDD
Không có "kiến trúc dự án tốt nhất" sẽ phù hợp với bất kỳ dự án và phong cách mã hóa nào.
Nhưng bạn nên luôn cấu trúc dự án của mình. React không tuân theo bất kỳ cấu trúc dự án cụ thể nào và điều tích cực về điều này là nó cho phép chúng ta tạo ra một cấu trúc phù hợp với nhu cầu của mình. Những gì tôi sẽ thảo luận ở đây chỉ đơn giản là một cách kiên quyết để cấu trúc một dự án phản ứng. Bạn có thể sử dụng một số bộ phận hoặc tất cả chúng cho dự án của mình. Vậy hãy bắt đầu.

Thiết lập dự án cho React
Đầu tiên, hãy thiết lập môi trường phát triển để làm việc trên phản ứng. Tôi thích sử dụng

VS Code với nhiều phần mở rộng khác nhau như một trình soạn thảo mã.
Google Chrome với tư cách là một trình duyệt cung cấp nhiều công cụ thân thiện với nhà phát triển để gỡ lỗi.
Là một công cụ gỡ lỗi, tôi thích các công cụ dành cho nhà phát triển React và Redux DevTools vì chúng rất hữu ích.
Bây giờ chúng ta có thể sử dụng react CLI để tạo một dự án mới.

React js được tạo bằng cách sử dụng ‘create-react-app cung cấp một số mã mặc định. Hãy xóa hầu hết mọi thứ như biểu trưng, ​​hình ảnh, kiểu, v.v. và giữ lại ứng dụng khung và bây giờ chúng ta có thể bắt đầu thực hiện cấu trúc thư mục của mình.

Cấu trúc thư mục cho dự án React
Cấu trúc thư mục của chúng tôi trông như thế này.

Cấu trúc thư mục

![alt text](https://www.xenonstack.com/hubfs/xenonstack-react-directory-structure.png)

Thư mục Assets
Như tên đã nói, nó chứa các Assets của dự án của chúng tôi. Nó bao gồm hình ảnh và các tệp css. Tại đây chúng tôi có thể lưu trữ các phong cách toàn cầu của mình. Chúng tôi đang tập trung vào dự án để chúng tôi có thể lưu trữ các kiểu dựa trên trang hoặc dựa trên thành phần ở đây. Nhưng chúng ta thậm chí có thể giữ kiểu theo thư mục trang hoặc thư mục thành phần. Nhưng điều đó phụ thuộc vào sự thoải mái của nhà phát triển.

Thư mục Layouts
Như tên đã nói, nó chứa các bố cục có sẵn cho toàn bộ dự án như đầu trang, chân trang, v.v. Chúng ta có thể lưu trữ mã đầu trang, chân trang hoặc thanh bên ở đây và gọi nó.

Thư mục Components
Các thành phần là các khối xây dựng của bất kỳ dự án phản ứng nào. Thư mục này bao gồm một tập hợp các thành phần giao diện người dùng như nút, phương thức, đầu vào, trình tải, v.v., có thể được sử dụng trên các tệp khác nhau trong dự án. Mỗi thành phần nên bao gồm một tệp thử nghiệm để thực hiện một bài kiểm tra đơn vị vì nó sẽ được sử dụng rộng rãi trong dự án.

Thư mục Pages
Các tệp trong thư mục trang cho biết đường đi của ứng dụng phản ứng. Mỗi tệp trong thư mục này chứa tuyến đường của nó. Một trang có thể chứa thư mục con của nó. Mỗi trang có trạng thái của nó và thường được sử dụng để gọi một hoạt động không đồng bộ. Nó thường bao gồm các thành phần khác nhau được nhóm lại.

Một mô hình lập trình không đồng bộ trong đó nhà phát triển xử lý luồng dữ liệu tới để truyền tải những thay đổi trong mã. Nhấp để khám phá về, Giải pháp lập trình phản ứng cho nền tảng giám sát

Thư mục Middleware
Thư mục này bao gồm phần mềm trung gian cho phép tạo ra các tác dụng phụ trong ứng dụng. Nó được sử dụng khi chúng ta đang sử dụng redux với react. Ở đây chúng tôi giữ tất cả phần mềm trung gian tùy chỉnh của chúng tôi.

Thư mục Routes
Thư mục này bao gồm tất cả các tuyến của ứng dụng. Nó bao gồm các tuyến đường riêng tư, được bảo vệ và tất cả các loại. Ở đây chúng tôi thậm chí có thể gọi là tuyến con của chúng tôi.

Thư mục Config
Thư mục này bao gồm một tệp cấu hình nơi chúng tôi lưu trữ các biến môi trường trong config.js. Chúng tôi sẽ sử dụng tệp này để thiết lập cấu hình đa môi trường trong ứng dụng của bạn.

Thư mục Services
Thư mục này sẽ được thêm vào nếu chúng tôi sử dụng redux trong dự án của bạn. Bên trong nó, có 3 thư mục tên là hành động, bộ giảm và thư mục con hằng số để quản lý trạng thái. Các hành động và bộ giảm sẽ được gọi trong hầu hết các trang, vì vậy hãy tạo các hành động, bộ giảm và hằng số theo tên trang.

Thư mục Utils
Thư mục Utils bao gồm một số chức năng được sử dụng nhiều lần thường được sử dụng trong dự án. Nó chỉ nên chứa các hàm & đối tượng js phổ biến như tùy chọn thả xuống, điều kiện regex, định dạng dữ liệu, v.v.

Cấu trúc dự án cuối cùng
Vì vậy, kiến ​​trúc cuối cùng của dự án phản ứng của chúng tôi đã hoàn thành và nó trông giống như thế này. Bạn có thể tùy chỉnh điều này theo yêu cầu của bạn.

Phần kết luận
Đây là một trong những kiến trúc được sử dụng nhiều nhất. Như tôi đã đề cập, không có kiến trúc tốt nhất sẽ phù hợp với mọi dự án. Tôi thay đổi các yêu cầu nhưng luôn nhớ duy trì cấu trúc thư mục để mọi mã được tập trung và dễ dàng hiểu bởi bất kỳ nhà phát triển nào.


Nguyên Tắc Cơ Bản Khi Làm Việc Nhóm Với Git
1. Luôn tạo branch mới
Luôn bắt đầu một task bằng một branch mới được tách từ một trong các branch chính được cập nhật mới nhất (master / develop / stable)
Tên của branch mới có thể sử dụng task id trong hệ thống quản lý task hoặc mô tả ngắn gọn (features/user_registration_api)
2. Tuân thủ nguyên tắc đặt tên commit message
Chi tiết xem tại bài viết trước
3. Commit / review sớm và thường xuyên
Nhằm giữ branch feature và branch chính gần nhau nhất có thể, việc này giúp:
Cập nhật tình hình phát triển của dự án
Giữ thành viên trong team luôn ở phiên bản mới nhất của branch chính
Giảm xung đột khi tiến hành merge branch
4. Mỗi commit chỉ thực hiện một nhiệm vụ
Rule này vô cùng quan trọng khi review / debug code. Thực hiện nhiều nhiệm vụ trong cùng một commit sẽ gây rất nhiều khó khăn cho các thành viên còn lại trong team để hiểu về commit đó.
Ví dụ: Commit “CPS-123: Add shopping cart api “ có sửa đổi cả file template.html hay .gitignore là một commit không đúng chuẩn.
Tip: Tuân thủ quy tắc đặt tên commit message với danh sách động từ (Add / Drop / Fix / Bump / Make / Refactor / Optimize / Reformat / Repharse / Document) là cách đơn giản để nhắc nhở bản thân luôn.
5. Không commit file không liên quan
Một trong các lỗi phổ biến nhất của lập trình viên là commit rất nhiều file không liên đến dự án. Ví dụ như file cấu hình được khởi tạo bởi IDE hay file test sinh ra trong quá trình lập trình chức năng.
