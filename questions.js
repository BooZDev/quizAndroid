// ===== KOTLIN BASICS QUIZ - QUESTION DATABASE =====
// Lesson 1: Kotlin Basics - Comprehensive Question Bank

const questions = [
    // ==================== OPERATORS ====================
    {
        id: 1,
        type: "multiple-choice",
        topic: "operators",
        difficulty: 1,
        question: "Trong Kotlin, kết quả của biểu thức <code>1 + 1</code> là gì?",
        options: [
            "kotlin.Int = 2",
            "kotlin.Double = 2.0",
            "kotlin.String = \"2\"",
            "kotlin.Long = 2"
        ],
        correct: 0,
        explanation: "Khi cộng hai số nguyên (Int), kết quả vẫn là kiểu Int. <code>1 + 1</code> trả về <code>kotlin.Int = 2</code>."
    },
    {
        id: 2,
        type: "multiple-choice",
        topic: "operators",
        difficulty: 1,
        question: "Kết quả của <code>1.0 / 2.0</code> trong Kotlin là gì?",
        options: [
            "kotlin.Int = 0",
            "kotlin.Double = 0.5",
            "kotlin.Float = 0.5",
            "kotlin.Double = 0"
        ],
        correct: 1,
        explanation: "Khi chia hai số Double, kết quả là Double. <code>1.0 / 2.0 = 0.5</code>"
    },
    {
        id: 3,
        type: "multiple-choice",
        topic: "operators",
        difficulty: 1,
        question: "Toán tử <code>%</code> trong Kotlin dùng để làm gì?",
        options: [
            "Tính phần trăm",
            "Tính phần dư (modulo)",
            "Tính phần nguyên",
            "Tính lũy thừa"
        ],
        correct: 1,
        explanation: "Toán tử <code>%</code> (modulo) trả về phần dư của phép chia. Ví dụ: <code>9 % 3 = 0</code>"
    },
    {
        id: 4,
        type: "output-prediction",
        topic: "operators",
        difficulty: 1,
        question: "Kết quả của <code>9 % 4</code> là gì?",
        options: ["0", "1", "2", "2.25"],
        correct: 1,
        explanation: "<code>9 % 4 = 1</code> vì 9 chia 4 được 2 dư 1."
    },
    {
        id: 5,
        type: "multiple-choice",
        topic: "operators",
        difficulty: 2,
        question: "Kết quả của <code>1/2</code> trong Kotlin là gì?",
        options: [
            "kotlin.Double = 0.5",
            "kotlin.Int = 0",
            "kotlin.Float = 0.5",
            "Error: Division not supported"
        ],
        correct: 1,
        explanation: "Khi chia hai số Int, kết quả vẫn là Int và phần thập phân bị cắt bỏ. <code>1/2 = 0</code>"
    },
    {
        id: 6,
        type: "code-completion",
        topic: "operators",
        difficulty: 2,
        question: "Hoàn thành code để gọi phương thức nhân trên số nguyên:",
        code: "val result = 2.___(3)",
        codeWithBlank: "val result = 2.<span class='blank'>???</span>(3)",
        options: ["multiply", "times", "mult", "product"],
        correct: 1,
        explanation: "Kotlin cho phép gọi phương thức trên số như object. <code>2.times(3)</code> tương đương <code>2 * 3 = 6</code>"
    },
    {
        id: 7,
        type: "code-completion",
        topic: "operators",
        difficulty: 2,
        question: "Phương thức nào dùng để chia hai số trong Kotlin?",
        code: "val result = 2.4.___(2)",
        codeWithBlank: "val result = 2.4.<span class='blank'>???</span>(2)",
        options: ["divide", "div", "split", "quot"],
        correct: 1,
        explanation: "<code>div()</code> là phương thức chia. <code>2.4.div(2) = 1.2</code>"
    },
    {
        id: 8,
        type: "output-prediction",
        topic: "operators",
        difficulty: 2,
        question: "Kết quả của <code>3.5.plus(4)</code> là gì?",
        options: ["7", "7.5", "7.0", "Error"],
        correct: 1,
        explanation: "<code>3.5.plus(4) = 7.5</code>. Khi cộng Double với Int, kết quả là Double."
    },
    {
        id: 9,
        type: "multiple-choice",
        topic: "operators",
        difficulty: 1,
        question: "Toán tử nào dùng để so sánh bằng trong Kotlin?",
        options: ["=", "==", "===", "equals"],
        correct: 1,
        explanation: "<code>==</code> so sánh giá trị (structural equality). <code>=</code> là gán, <code>===</code> so sánh tham chiếu."
    },
    {
        id: 10,
        type: "multiple-choice",
        topic: "operators",
        difficulty: 1,
        question: "Toán tử <code>++</code> dùng để làm gì?",
        options: [
            "Cộng hai số",
            "Tăng giá trị lên 1",
            "Nhân đôi giá trị",
            "Nối chuỗi"
        ],
        correct: 1,
        explanation: "<code>++</code> là toán tử tăng (increment), tăng giá trị của biến lên 1."
    },

    // ==================== DATA TYPES ====================
    {
        id: 11,
        type: "multiple-choice",
        topic: "data-types",
        difficulty: 1,
        question: "Kiểu dữ liệu <code>Int</code> trong Kotlin có bao nhiêu bit?",
        options: ["8 bits", "16 bits", "32 bits", "64 bits"],
        correct: 2,
        explanation: "<code>Int</code> là kiểu số nguyên 32-bit, có giá trị từ -2³¹ đến 2³¹-1."
    },
    {
        id: 12,
        type: "multiple-choice",
        topic: "data-types",
        difficulty: 1,
        question: "Kiểu dữ liệu nào dùng để lưu số thực với độ chính xác cao nhất?",
        options: ["Float", "Double", "Long", "Int"],
        correct: 1,
        explanation: "<code>Double</code> là 64-bit với 16-17 chữ số có nghĩa. <code>Float</code> chỉ 32-bit với 6-7 chữ số."
    },
    {
        id: 13,
        type: "multiple-choice",
        topic: "data-types",
        difficulty: 2,
        question: "Kiểu <code>Byte</code> có thể lưu giá trị trong khoảng nào?",
        options: [
            "0 đến 255",
            "-128 đến 127",
            "-256 đến 255",
            "0 đến 127"
        ],
        correct: 1,
        explanation: "<code>Byte</code> là 8-bit signed integer, có giá trị từ -128 đến 127."
    },
    {
        id: 14,
        type: "error-detection",
        topic: "data-types",
        difficulty: 2,
        question: "Code sau có lỗi gì?",
        code: "val i: Int = 6\nval b: Byte = i",
        codeHighlight: true,
        options: [
            "Không có lỗi",
            "Type mismatch: Int không thể gán trực tiếp cho Byte",
            "Lỗi cú pháp",
            "Thiếu semicolon"
        ],
        correct: 1,
        explanation: "Kotlin không tự động chuyển đổi giữa các kiểu số. Cần dùng <code>i.toByte()</code> để chuyển đổi."
    },
    {
        id: 15,
        type: "code-completion",
        topic: "data-types",
        difficulty: 2,
        question: "Hoàn thành code để chuyển Int sang Byte:",
        code: "val i: Int = 6\nprintln(i.___())",
        codeWithBlank: "val i: Int = 6\nprintln(i.<span class='blank'>???</span>())",
        options: ["toByte", "asByte", "convertByte", "byte"],
        correct: 0,
        explanation: "Dùng <code>.toByte()</code> để chuyển đổi Int sang Byte."
    },
    {
        id: 16,
        type: "multiple-choice",
        topic: "data-types",
        difficulty: 2,
        question: "Cách viết số 1 triệu nào sau đây KHÔNG hợp lệ trong Kotlin?",
        options: [
            "1_000_000",
            "1000000",
            "1,000,000",
            "val oneMillion = 1_000_000"
        ],
        correct: 2,
        explanation: "Kotlin cho phép dùng underscore (_) để phân cách số, nhưng KHÔNG dùng dấu phẩy (,)."
    },
    {
        id: 17,
        type: "multiple-choice",
        topic: "data-types",
        difficulty: 1,
        question: "Chuỗi (String) trong Kotlin được đặt trong dấu gì?",
        options: [
            "Dấu nháy đơn (')",
            "Dấu nháy kép (\")",
            "Dấu backtick (`)",
            "Dấu ngoặc vuông []"
        ],
        correct: 1,
        explanation: "String literals được đặt trong dấu nháy kép (\"). Dấu nháy đơn dùng cho Char."
    },
    {
        id: 18,
        type: "multiple-choice",
        topic: "data-types",
        difficulty: 2,
        question: "Raw string (chuỗi thô) trong Kotlin được đặt trong dấu gì?",
        options: [
            "Dấu nháy đơn (''')",
            "Ba dấu nháy kép (\"\"\")",
            "Dấu backtick (```)",
            "Dấu ngoặc nhọn {}"
        ],
        correct: 1,
        explanation: "Triple quotes (\"\"\") cho phép viết raw string với nhiều dòng và ký tự đặc biệt."
    },
    {
        id: 19,
        type: "output-prediction",
        topic: "data-types",
        difficulty: 2,
        question: "Kết quả của code sau là gì?<br><code>val s = \"abc\"<br>println(\"$s.length is ${s.length}\")</code>",
        options: [
            "abc.length is 3",
            "$s.length is ${s.length}",
            "abc.length is ${s.length}",
            "Error"
        ],
        correct: 0,
        explanation: "String template: <code>$s</code> được thay bằng \"abc\", <code>${s.length}</code> được thay bằng 3."
    },
    {
        id: 20,
        type: "code-completion",
        topic: "data-types",
        difficulty: 2,
        question: "Hoàn thành string template:",
        code: "val name = \"Kotlin\"\nprintln(\"Hello, ___name\")",
        codeWithBlank: "val name = \"Kotlin\"\nprintln(\"Hello, <span class='blank'>???</span>name\")",
        options: ["#", "$", "@", "&"],
        correct: 1,
        explanation: "Dùng <code>$</code> để chèn biến vào string. <code>\"Hello, $name\"</code> => \"Hello, Kotlin\""
    },

    // ==================== VARIABLES ====================
    {
        id: 21,
        type: "multiple-choice",
        topic: "variables",
        difficulty: 1,
        question: "Từ khóa nào dùng để khai báo biến không thể thay đổi (immutable)?",
        options: ["var", "val", "const", "final"],
        correct: 1,
        explanation: "<code>val</code> (value) khai báo biến immutable - không thể gán lại giá trị."
    },
    {
        id: 22,
        type: "multiple-choice",
        topic: "variables",
        difficulty: 1,
        question: "Từ khóa nào dùng để khai báo biến có thể thay đổi (mutable)?",
        options: ["val", "var", "let", "mut"],
        correct: 1,
        explanation: "<code>var</code> (variable) cho phép thay đổi giá trị của biến sau khi khởi tạo."
    },
    {
        id: 23,
        type: "error-detection",
        topic: "variables",
        difficulty: 2,
        question: "Code sau có lỗi gì?",
        code: "val size = 1\nsize = 2",
        codeHighlight: true,
        options: [
            "Không có lỗi",
            "val không thể gán lại giá trị",
            "Thiếu kiểu dữ liệu",
            "Lỗi cú pháp"
        ],
        correct: 1,
        explanation: "<code>val</code> khai báo biến immutable. Không thể gán lại <code>size = 2</code>."
    },
    {
        id: 24,
        type: "multiple-choice",
        topic: "variables",
        difficulty: 2,
        question: "Kotlin có đặc điểm gì về khai báo kiểu dữ liệu?",
        options: [
            "Bắt buộc khai báo kiểu cho mọi biến",
            "Hỗ trợ type inference - tự suy luận kiểu",
            "Không hỗ trợ kiểu dữ liệu",
            "Chỉ hỗ trợ kiểu dynamic"
        ],
        correct: 1,
        explanation: "Kotlin có type inference mạnh mẽ - compiler tự suy luận kiểu từ giá trị gán."
    },
    {
        id: 25,
        type: "code-completion",
        topic: "variables",
        difficulty: 1,
        question: "Khai báo biến width kiểu Int với giá trị 12:",
        code: "___ width: Int = 12",
        codeWithBlank: "<span class='blank'>???</span> width: Int = 12",
        options: ["let", "var", "int", "const"],
        correct: 1,
        explanation: "Dùng <code>var</code> hoặc <code>val</code> để khai báo biến."
    },
    {
        id: 26,
        type: "multiple-choice",
        topic: "variables",
        difficulty: 2,
        question: "Kotlin là ngôn ngữ kiểu gì?",
        options: [
            "Dynamically-typed (kiểu động)",
            "Statically-typed (kiểu tĩnh)",
            "Untyped (không kiểu)",
            "Weakly-typed (kiểu yếu)"
        ],
        correct: 1,
        explanation: "Kotlin là statically-typed - kiểu được xác định tại compile time và không thay đổi."
    },
    {
        id: 27,
        type: "error-detection",
        topic: "variables",
        difficulty: 2,
        question: "Code sau có vấn đề gì?",
        code: "var count = 1\ncount = \"two\"",
        codeHighlight: true,
        options: [
            "Không có lỗi",
            "Type mismatch: không thể gán String cho biến Int",
            "var không cho phép gán lại",
            "Thiếu dấu chấm phẩy"
        ],
        correct: 1,
        explanation: "Sau khi kiểu được xác định (Int), không thể gán giá trị khác kiểu (String)."
    },
    {
        id: 28,
        type: "output-prediction",
        topic: "variables",
        difficulty: 2,
        question: "Kết quả của code sau?<br><code>val dogs = 3<br>val cats = 2<br>println(\"I have $dogs dogs and $cats cats\")</code>",
        options: [
            "I have 3 dogs and 2 cats",
            "I have $dogs dogs and $cats cats",
            "I have dogs dogs and cats cats",
            "Error"
        ],
        correct: 0,
        explanation: "String template: <code>$dogs</code> và <code>$cats</code> được thay bằng giá trị 3 và 2."
    },

    // ==================== CONDITIONALS ====================
    {
        id: 29,
        type: "multiple-choice",
        topic: "conditionals",
        difficulty: 1,
        question: "Câu lệnh nào thay thế switch trong Kotlin?",
        options: ["switch", "when", "case", "match"],
        correct: 1,
        explanation: "Kotlin dùng <code>when</code> thay cho switch, mạnh mẽ và linh hoạt hơn nhiều."
    },
    {
        id: 30,
        type: "code-completion",
        topic: "conditionals",
        difficulty: 2,
        question: "Hoàn thành câu lệnh when:",
        code: "___(results) {\n  0 -> println(\"No results\")\n  else -> println(\"Has results\")\n}",
        codeWithBlank: "<span class='blank'>???</span>(results) {\n  0 -> println(\"No results\")\n  else -> println(\"Has results\")\n}",
        options: ["switch", "when", "if", "case"],
        correct: 1,
        explanation: "<code>when</code> là cấu trúc điều kiện mạnh mẽ trong Kotlin."
    },
    {
        id: 31,
        type: "multiple-choice",
        topic: "conditionals",
        difficulty: 2,
        question: "Cách viết range từ 1 đến 100 (bao gồm cả 100) trong Kotlin?",
        options: ["1...100", "1..100", "1 to 100", "range(1, 100)"],
        correct: 1,
        explanation: "<code>1..100</code> tạo range từ 1 đến 100 (inclusive)."
    },
    {
        id: 32,
        type: "output-prediction",
        topic: "conditionals",
        difficulty: 2,
        question: "Kết quả của code sau?<br><code>val x = 50<br>if (x in 1..100) println(x)</code>",
        options: ["50", "true", "Không in gì", "Error"],
        correct: 0,
        explanation: "50 nằm trong range 1..100 nên điều kiện true, in ra 50."
    },
    {
        id: 33,
        type: "code-completion",
        topic: "conditionals",
        difficulty: 2,
        question: "Kiểm tra số có nằm trong range:",
        code: "if (x ___ 1..100) println(\"Valid\")",
        codeWithBlank: "if (x <span class='blank'>???</span> 1..100) println(\"Valid\")",
        options: ["in", "within", "between", "inside"],
        correct: 0,
        explanation: "Dùng từ khóa <code>in</code> để kiểm tra phần tử có trong range hay collection."
    },
    {
        id: 34,
        type: "output-prediction",
        topic: "conditionals",
        difficulty: 2,
        question: "Kết quả của <code>for (i in 1..5) print(i)</code>?",
        options: ["12345", "1234", "54321", "1 2 3 4 5"],
        correct: 0,
        explanation: "<code>1..5</code> tạo range từ 1 đến 5 (inclusive), in ra 12345."
    },
    {
        id: 35,
        type: "output-prediction",
        topic: "conditionals",
        difficulty: 2,
        question: "Kết quả của <code>for (i in 5 downTo 1) print(i)</code>?",
        options: ["12345", "54321", "5 4 3 2 1", "Error"],
        correct: 1,
        explanation: "<code>downTo</code> tạo range giảm dần từ 5 xuống 1, in ra 54321."
    },
    {
        id: 36,
        type: "output-prediction",
        topic: "conditionals",
        difficulty: 2,
        question: "Kết quả của <code>for (i in 3..6 step 2) print(i)</code>?",
        options: ["3456", "35", "36", "3 5"],
        correct: 1,
        explanation: "<code>step 2</code> bước nhảy 2: 3, 5, in ra 35."
    },
    {
        id: 37,
        type: "code-completion",
        topic: "conditionals",
        difficulty: 2,
        question: "Vòng lặp for với index và element:",
        code: "for ((index, element) in list.___()) {\n  println(\"$index: $element\")\n}",
        codeWithBlank: "for ((index, element) in list.<span class='blank'>???</span>()) {\n  println(\"$index: $element\")\n}",
        options: ["enumerate", "withIndex", "indexed", "entries"],
        correct: 1,
        explanation: "<code>withIndex()</code> trả về IndexedValue chứa cả index và element."
    },
    {
        id: 38,
        type: "multiple-choice",
        topic: "conditionals",
        difficulty: 2,
        question: "Vòng lặp nào luôn chạy ít nhất 1 lần?",
        options: ["while", "for", "do...while", "repeat"],
        correct: 2,
        explanation: "<code>do...while</code> kiểm tra điều kiện SAU khi thực thi, nên luôn chạy ít nhất 1 lần."
    },
    {
        id: 39,
        type: "code-completion",
        topic: "conditionals",
        difficulty: 1,
        question: "Lặp 5 lần:",
        code: "___(5) {\n  println(\"Hello\")\n}",
        codeWithBlank: "<span class='blank'>???</span>(5) {\n  println(\"Hello\")\n}",
        options: ["loop", "repeat", "times", "iterate"],
        correct: 1,
        explanation: "<code>repeat(n)</code> là hàm Kotlin lặp n lần, đơn giản và dễ đọc."
    },

    // ==================== LISTS & ARRAYS ====================
    {
        id: 40,
        type: "multiple-choice",
        topic: "lists-arrays",
        difficulty: 1,
        question: "Hàm nào tạo List immutable (không thể thay đổi)?",
        options: ["arrayOf()", "listOf()", "mutableListOf()", "arrayListOf()"],
        correct: 1,
        explanation: "<code>listOf()</code> tạo immutable List - không thể add/remove phần tử."
    },
    {
        id: 41,
        type: "multiple-choice",
        topic: "lists-arrays",
        difficulty: 1,
        question: "Hàm nào tạo List có thể thay đổi (mutable)?",
        options: ["listOf()", "mutableListOf()", "immutableListOf()", "newList()"],
        correct: 1,
        explanation: "<code>mutableListOf()</code> tạo MutableList - có thể add, remove, modify phần tử."
    },
    {
        id: 42,
        type: "code-completion",
        topic: "lists-arrays",
        difficulty: 1,
        question: "Tạo array với các phần tử:",
        code: "val pets = ___(\"dog\", \"cat\", \"bird\")",
        codeWithBlank: "val pets = <span class='blank'>???</span>(\"dog\", \"cat\", \"bird\")",
        options: ["newArray", "arrayOf", "Array", "createArray"],
        correct: 1,
        explanation: "<code>arrayOf()</code> tạo array với các phần tử được chỉ định."
    },
    {
        id: 43,
        type: "multiple-choice",
        topic: "lists-arrays",
        difficulty: 2,
        question: "Sự khác biệt chính giữa Array và List trong Kotlin?",
        options: [
            "Array có kích thước cố định, List có thể thay đổi kích thước",
            "Không có sự khác biệt",
            "List nhanh hơn Array",
            "Array chỉ chứa được số"
        ],
        correct: 0,
        explanation: "Array có kích thước cố định khi tạo. MutableList có thể add/remove."
    },
    {
        id: 44,
        type: "code-completion",
        topic: "lists-arrays",
        difficulty: 2,
        question: "Tạo array chỉ chứa số nguyên:",
        code: "val numbers = ___(1, 2, 3)",
        codeWithBlank: "val numbers = <span class='blank'>???</span>(1, 2, 3)",
        options: ["arrayOf", "intArrayOf", "IntArray", "numbersOf"],
        correct: 1,
        explanation: "<code>intArrayOf()</code> tạo IntArray - array primitive int, hiệu quả hơn."
    },
    {
        id: 45,
        type: "multiple-choice",
        topic: "lists-arrays",
        difficulty: 2,
        question: "Cách nối 2 array trong Kotlin?",
        options: [
            "array1.concat(array2)",
            "array1 + array2",
            "array1.join(array2)",
            "merge(array1, array2)"
        ],
        correct: 1,
        explanation: "Dùng toán tử <code>+</code> để nối arrays: <code>val combined = array1 + array2</code>"
    },
    {
        id: 46,
        type: "output-prediction",
        topic: "lists-arrays",
        difficulty: 2,
        question: "Kết quả của code sau?<br><code>val list = listOf(\"a\", \"b\", \"c\")<br>println(list)</code>",
        options: [
            "[a, b, c]",
            "a b c",
            "abc",
            "List(a, b, c)"
        ],
        correct: 0,
        explanation: "List khi in ra có định dạng [element1, element2, ...]"
    },
    {
        id: 47,
        type: "error-detection",
        topic: "lists-arrays",
        difficulty: 2,
        question: "Code sau có lỗi gì?",
        code: "val list = listOf(\"a\", \"b\")\nlist.add(\"c\")",
        codeHighlight: true,
        options: [
            "Không có lỗi",
            "listOf() tạo immutable list, không có method add()",
            "Sai cú pháp",
            "Thiếu import"
        ],
        correct: 1,
        explanation: "<code>listOf()</code> tạo List immutable. Dùng <code>mutableListOf()</code> nếu cần add/remove."
    },
    {
        id: 48,
        type: "multiple-choice",
        topic: "lists-arrays",
        difficulty: 2,
        question: "Array có thể chứa các kiểu dữ liệu khác nhau không?",
        options: [
            "Không, phải cùng kiểu",
            "Có, dùng arrayOf() với Any",
            "Có, nhưng không khuyến khích",
            "Cả B và C đều đúng"
        ],
        correct: 3,
        explanation: "<code>arrayOf()</code> có thể chứa mixed types, nhưng nên tránh để code rõ ràng."
    },

    // ==================== NULL SAFETY ====================
    {
        id: 49,
        type: "multiple-choice",
        topic: "null-safety",
        difficulty: 1,
        question: "Trong Kotlin, biến có thể là null theo mặc định không?",
        options: [
            "Có, giống Java",
            "Không, phải khai báo nullable tường minh",
            "Tùy vào kiểu dữ liệu",
            "Chỉ với kiểu object"
        ],
        correct: 1,
        explanation: "Kotlin null-safe: biến KHÔNG thể null theo mặc định. Phải dùng <code>?</code> để cho phép null."
    },
    {
        id: 50,
        type: "error-detection",
        topic: "null-safety",
        difficulty: 1,
        question: "Code sau có lỗi gì?",
        code: "var name: String = null",
        codeHighlight: true,
        options: [
            "Không có lỗi",
            "null không thể gán cho non-null type String",
            "Thiếu từ khóa val",
            "String không phải kiểu hợp lệ"
        ],
        correct: 1,
        explanation: "<code>String</code> là non-null type. Để gán null, dùng <code>String?</code>"
    },
    {
        id: 51,
        type: "code-completion",
        topic: "null-safety",
        difficulty: 1,
        question: "Khai báo biến có thể nhận null:",
        code: "var name: String___ = null",
        codeWithBlank: "var name: String<span class='blank'>???</span> = null",
        options: ["?", "!", "null", "*"],
        correct: 0,
        explanation: "<code>?</code> sau kiểu dữ liệu cho phép biến nhận giá trị null."
    },
    {
        id: 52,
        type: "multiple-choice",
        topic: "null-safety",
        difficulty: 2,
        question: "Toán tử <code>?.</code> (safe call operator) làm gì?",
        options: [
            "Ép kiểu về nullable",
            "Gọi method chỉ khi object không null",
            "Throw exception nếu null",
            "Kiểm tra null và gán giá trị mới"
        ],
        correct: 1,
        explanation: "<code>?.</code> gọi method/property chỉ khi object không null, trả về null nếu object là null."
    },
    {
        id: 53,
        type: "output-prediction",
        topic: "null-safety",
        difficulty: 2,
        question: "Kết quả của code sau?<br><code>var x: Int? = null<br>println(x?.dec())</code>",
        options: ["null", "-1", "0", "Error"],
        correct: 0,
        explanation: "x là null, nên <code>x?.dec()</code> không gọi dec(), trả về null."
    },
    {
        id: 54,
        type: "multiple-choice",
        topic: "null-safety",
        difficulty: 2,
        question: "Toán tử <code>!!</code> (not-null assertion) làm gì?",
        options: [
            "Kiểm tra null an toàn",
            "Ép buộc coi như non-null, throw NPE nếu null",
            "Gán giá trị mặc định nếu null",
            "Chuyển nullable thành non-null an toàn"
        ],
        correct: 1,
        explanation: "<code>!!</code> khẳng định không null. Nếu thực tế là null sẽ throw NullPointerException."
    },
    {
        id: 55,
        type: "multiple-choice",
        topic: "null-safety",
        difficulty: 2,
        question: "Toán tử <code>?:</code> (Elvis operator) làm gì?",
        options: [
            "So sánh với null",
            "Gán giá trị mặc định nếu null",
            "Throw exception nếu null",
            "Kiểm tra kiểu dữ liệu"
        ],
        correct: 1,
        explanation: "<code>?:</code> trả về vế trái nếu không null, ngược lại trả về vế phải."
    },
    {
        id: 56,
        type: "output-prediction",
        topic: "null-safety",
        difficulty: 2,
        question: "Kết quả của <code>val x: Int? = null; println(x ?: 10)</code>?",
        options: ["null", "10", "0", "Error"],
        correct: 1,
        explanation: "x là null, nên Elvis operator <code>?:</code> trả về giá trị phải: 10."
    },
    {
        id: 57,
        type: "code-completion",
        topic: "null-safety",
        difficulty: 2,
        question: "Gọi method dec() an toàn trên nullable variable:",
        code: "var count: Int? = 5\ncount = count___dec()",
        codeWithBlank: "var count: Int? = 5\ncount = count<span class='blank'>???</span>dec()",
        options: [".?", "?.", "!.", "?."],
        correct: 3,
        explanation: "<code>?.</code> (safe call) gọi method chỉ khi không null."
    },
    {
        id: 58,
        type: "code-completion",
        topic: "null-safety",
        difficulty: 2,
        question: "Gán giá trị mặc định khi null:",
        code: "val result = nullableValue ___ defaultValue",
        codeWithBlank: "val result = nullableValue <span class='blank'>???</span> defaultValue",
        options: ["||", "??", "?:", "or"],
        correct: 2,
        explanation: "Elvis operator <code>?:</code> trả về vế trái nếu không null, ngược lại trả về vế phải."
    },
    {
        id: 59,
        type: "multiple-choice",
        topic: "null-safety",
        difficulty: 3,
        question: "Tại sao nên hạn chế sử dụng toán tử <code>!!</code>?",
        options: [
            "Vì nó chậm",
            "Vì nó có thể throw NullPointerException",
            "Vì nó không hỗ trợ trên Android",
            "Vì nó deprecated"
        ],
        correct: 1,
        explanation: "<code>!!</code> sẽ crash app nếu giá trị là null. Nên dùng safe call hoặc Elvis thay thế."
    },
    {
        id: 60,
        type: "error-detection",
        topic: "null-safety",
        difficulty: 2,
        question: "Code sau có vấn đề gì?",
        code: "val s: String? = null\nval len = s.length",
        codeHighlight: true,
        options: [
            "Không có lỗi",
            "Không thể gọi .length trực tiếp trên nullable type",
            "String không có property length",
            "null không phải String"
        ],
        correct: 1,
        explanation: "s là String? (nullable), không thể gọi .length trực tiếp. Dùng <code>s?.length</code>."
    },

    // ==================== ADDITIONAL QUESTIONS ====================
    {
        id: 61,
        type: "output-prediction",
        topic: "operators",
        difficulty: 2,
        question: "Kết quả của <code>6.0 * 50</code>?",
        options: [
            "kotlin.Int = 300",
            "kotlin.Double = 300.0",
            "kotlin.Float = 300.0",
            "Error"
        ],
        correct: 1,
        explanation: "Khi nhân Double với Int, kết quả là Double. <code>6.0 * 50 = 300.0</code>"
    },
    {
        id: 62,
        type: "multiple-choice",
        topic: "data-types",
        difficulty: 2,
        question: "<code>Boolean</code> trong Kotlin có những phép toán nào?",
        options: [
            "Chỉ có == và !=",
            "|| (OR), && (AND), ! (NOT)",
            "+, -, *, /",
            "<, >, <=, >="
        ],
        correct: 1,
        explanation: "Boolean operations: <code>||</code> (OR), <code>&&</code> (AND), <code>!</code> (NOT)."
    },
    {
        id: 63,
        type: "output-prediction",
        topic: "conditionals",
        difficulty: 2,
        question: "Kết quả của <code>for (i in 'd'..'g') print(i)</code>?",
        options: ["defg", "d e f g", "Error", "dgfg"],
        correct: 0,
        explanation: "Range cũng hoạt động với Char! <code>'d'..'g'</code> là d, e, f, g."
    },
    {
        id: 64,
        type: "code-completion",
        topic: "data-types",
        difficulty: 2,
        question: "Tính biểu thức trong string template:",
        code: "val a = 5\nval b = 3\nprintln(\"Sum: ___\")",
        codeWithBlank: "val a = 5\nval b = 3\nprintln(\"Sum: <span class='blank'>???</span>\")",
        options: ["$a + $b", "${a + b}", "$sum(a,b)", "$(a + b)"],
        correct: 1,
        explanation: "Biểu thức trong string template đặt trong <code>${expression}</code>."
    },
    {
        id: 65,
        type: "multiple-choice",
        topic: "variables",
        difficulty: 2,
        question: "Với <code>val list = mutableListOf(1, 2, 3)</code>, có thể làm gì?",
        options: [
            "Không thể thay đổi gì vì dùng val",
            "Có thể add/remove phần tử, không thể gán list khác",
            "Có thể gán list khác, không thể add/remove",
            "Có thể làm tất cả"
        ],
        correct: 1,
        explanation: "<code>val</code> không cho gán lại reference, nhưng nội dung của mutable collection vẫn thay đổi được."
    },
    {
        id: 66,
        type: "output-prediction",
        topic: "conditionals",
        difficulty: 3,
        question: "Kết quả của code?<br><code>val x = 15<br>when (x) {<br>  in 1..10 -> print(\"A\")<br>  in 11..20 -> print(\"B\")<br>  else -> print(\"C\")<br>}</code>",
        options: ["A", "B", "C", "AB"],
        correct: 1,
        explanation: "x = 15, nằm trong range 11..20, nên in \"B\"."
    },
    {
        id: 67,
        type: "code-completion",
        topic: "lists-arrays",
        difficulty: 2,
        question: "Xóa phần tử khỏi mutable list:",
        code: "val list = mutableListOf(\"a\", \"b\", \"c\")\nlist.___(\"b\")",
        codeWithBlank: "val list = mutableListOf(\"a\", \"b\", \"c\")\nlist.<span class='blank'>???</span>(\"b\")",
        options: ["delete", "remove", "drop", "erase"],
        correct: 1,
        explanation: "<code>remove()</code> xóa phần tử đầu tiên matching khỏi MutableList."
    },
    {
        id: 68,
        type: "multiple-choice",
        topic: "null-safety",
        difficulty: 3,
        question: "Chuỗi safe call hoạt động thế nào?<br><code>person?.address?.city?.name</code>",
        options: [
            "Throw error nếu bất kỳ đâu là null",
            "Trả về null ngay khi gặp null đầu tiên",
            "Bỏ qua null và tiếp tục",
            "Chuyển thành empty string"
        ],
        correct: 1,
        explanation: "Safe call chain: nếu bất kỳ phần nào là null, cả expression trả về null."
    },
    {
        id: 69,
        type: "output-prediction",
        topic: "operators",
        difficulty: 1,
        question: "Kết quả của <code>10 / 3</code> (cả hai là Int)?",
        options: ["3.33", "3", "3.0", "4"],
        correct: 1,
        explanation: "Integer division trả về Int, phần thập phân bị cắt bỏ. <code>10 / 3 = 3</code>"
    },
    {
        id: 70,
        type: "multiple-choice",
        topic: "data-types",
        difficulty: 2,
        question: "Kiểu <code>Long</code> trong Kotlin có suffix gì?",
        options: ["l hoặc L", "lg", "long", "Không cần suffix"],
        correct: 0,
        explanation: "Long literal có suffix <code>L</code>. VD: <code>val x = 100L</code>"
    },
    {
        id: 71,
        type: "code-completion",
        topic: "data-types",
        difficulty: 2,
        question: "Khai báo số hexadecimal:",
        code: "val hex = ___FF",
        codeWithBlank: "val hex = <span class='blank'>???</span>FF",
        options: ["#", "0x", "h", "\\x"],
        correct: 1,
        explanation: "Hexadecimal dùng prefix <code>0x</code>. VD: <code>0xFF = 255</code>"
    },
    {
        id: 72,
        type: "code-completion",
        topic: "data-types",
        difficulty: 2,
        question: "Khai báo số binary:",
        code: "val binary = ___1010",
        codeWithBlank: "val binary = <span class='blank'>???</span>1010",
        options: ["0b", "b", "#b", "bin"],
        correct: 0,
        explanation: "Binary literal dùng prefix <code>0b</code>. VD: <code>0b1010 = 10</code>"
    },
    {
        id: 73,
        type: "multiple-choice",
        topic: "conditionals",
        difficulty: 2,
        question: "Sự khác biệt giữa <code>while</code> và <code>do...while</code>?",
        options: [
            "Không khác biệt",
            "do...while kiểm tra điều kiện sau, luôn chạy ít nhất 1 lần",
            "while nhanh hơn",
            "do...while không hỗ trợ break"
        ],
        correct: 1,
        explanation: "<code>do...while</code> thực thi body trước, kiểm tra điều kiện sau."
    },
    {
        id: 74,
        type: "output-prediction",
        topic: "conditionals",
        difficulty: 3,
        question: "Kết quả của code?<br><code>var i = 5<br>do { i-- } while (i > 5)<br>println(i)</code>",
        options: ["5", "4", "0", "Error"],
        correct: 1,
        explanation: "do-while chạy 1 lần: i = 4. Điều kiện 4 > 5 false, dừng lại. In ra 4."
    },
    {
        id: 75,
        type: "multiple-choice",
        topic: "data-types",
        difficulty: 1,
        question: "Kiểu <code>Char</code> trong Kotlin được đặt trong dấu gì?",
        options: [
            "Dấu nháy kép (\")",
            "Dấu nháy đơn (')",
            "Dấu backtick (`)",
            "Không cần dấu"
        ],
        correct: 1,
        explanation: "<code>Char</code> đặt trong dấu nháy đơn: <code>val c: Char = 'A'</code>."
    },
    {
        id: 76,
        type: "output-prediction",
        topic: "data-types",
        difficulty: 2,
        question: "Kết quả của <code>val x = 10_000<br>println(x)</code>?",
        options: ["10_000", "10000", "10,000", "Error"],
        correct: 1,
        explanation: "Underscore trong số chỉ để dễ đọc, không ảnh hưởng giá trị."
    },
    {
        id: 77,
        type: "fill-blank",
        topic: "operators",
        difficulty: 1,
        question: "Điền toán tử để tính phần dư của 17 chia cho 5:",
        code: "val remainder = 17 ___ 5",
        codeWithBlank: "val remainder = 17 <span class='blank'>???</span> 5",
        answer: ["%"],
        explanation: "Toán tử <code>%</code> (modulo) tính phần dư. <code>17 % 5 = 2</code>"
    },
    {
        id: 78,
        type: "fill-blank",
        topic: "variables",
        difficulty: 1,
        question: "Điền từ khóa để khai báo hằng số không thể thay đổi:",
        code: "___ PI = 3.14159",
        codeWithBlank: "<span class='blank'>???</span> PI = 3.14159",
        answer: ["val"],
        explanation: "<code>val</code> khai báo biến immutable (không thể gán lại)."
    },
    {
        id: 79,
        type: "fill-blank",
        topic: "null-safety",
        difficulty: 2,
        question: "Điền ký tự để khai báo biến nullable:",
        code: "var name: String___ = null",
        codeWithBlank: "var name: String<span class='blank'>???</span> = null",
        answer: ["?"],
        explanation: "<code>?</code> sau kiểu cho phép biến chứa null."
    },
    {
        id: 80,
        type: "fill-blank",
        topic: "conditionals",
        difficulty: 2,
        question: "Điền từ khóa để kiểm tra x có trong khoảng 1 đến 10:",
        code: "if (x ___ 1..10) println(\"OK\")",
        codeWithBlank: "if (x <span class='blank'>???</span> 1..10) println(\"OK\")",
        answer: ["in"],
        explanation: "Từ khóa <code>in</code> kiểm tra phần tử có trong range/collection."
    }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { questions };
}
