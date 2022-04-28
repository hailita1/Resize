const el = document.querySelector("#drag");
let isResizing = false;
const resizers = document.querySelectorAll("#content");
let currentResizer;
for (let resizer of resizers) {
    resizer.addEventListener("mousedown", mousedown);

    function mousedown(e) {
        currentResizer = e.target;
        isResizing = true;
        let prevY = e.clientY;

        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        function mousemove(e) {
            const rect = el.getBoundingClientRect();
            el.style.height = rect.height + (prevY - e.clientY) + "px";
            el.style.top = rect.top - (prevY - e.clientY) + "px";
            prevY = e.clientY;
        }

        function mouseup() {
            window.removeEventListener("mousemove", mousemove);
            window.removeEventListener("mouseup", mouseup);
            isResizing = false;
        }
    }
}
