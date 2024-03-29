(function colla() {
    // make doc editable and focus
    // const doc = document.getElementById('doc');
    // doc.contentEditable = true;
    // doc.focus();

    // if this is a new doc, generate a unique identifier
    // append it as a query param
    const id = 'my-channel';

    function getCaretCharacterOffsetWithin(element) {
        var caretOffset = 0;
        var doc = element.ownerDocument || element.document;
        var win = doc.defaultView || doc.parentWindow;
        var sel;
        if (typeof win.getSelection != 'undefined') {
            sel = win.getSelection();
            if (sel.rangeCount > 0) {
                var range = win.getSelection().getRangeAt(0);
                var preCaretRange = range.cloneRange();
                preCaretRange.selectNodeContents(element);
                preCaretRange.setEnd(range.endContainer, range.endOffset);
                caretOffset = preCaretRange.toString().length;
            }
        } else if ((sel = doc.selection) && sel.type != 'Control') {
            var textRange = sel.createRange();
            var preCaretTextRange = doc.body.createTextRange();
            preCaretTextRange.moveToElementText(element);
            preCaretTextRange.setEndPoint('EndToEnd', textRange);
            caretOffset = preCaretTextRange.text.length;
        }
        return caretOffset;
    }

    function setCaretPosition(el, pos) {
        // Loop through all child nodes
        for (var node of el.childNodes) {
            if (node.nodeType == 3) {
                // we have a text node
                if (node.length >= pos) {
                    // finally add our range
                    var range = document.createRange(),
                        sel = window.getSelection();
                    range.setStart(node, pos);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                    return -1; // we are done
                } else {
                    pos -= node.length;
                }
            } else {
                pos = setCaretPosition(node, pos);
                if (pos == -1) {
                    return -1; // no need to finish the for loop
                }
            }
        }
        return pos; // needed because of recursion stuff
    }

    const pusher = new window.Pusher('de5c865494456c71a085', {
        cluster: 'ap2'
    });

    const channel = pusher.subscribe(id);
    channel.bind('my-event', (data) => {
        //  sconst currentCursorPosition = getCaretCharacterOffsetWithin(doc);
        console.log('data,', data);
        // doc.innerHTML = data.message;
        // set the previous cursor position
        //  ssetCaretPosition(doc, currentCursorPosition);
    });
})();
