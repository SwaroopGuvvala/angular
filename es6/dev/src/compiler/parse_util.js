export class ParseLocation {
    constructor(file, offset, line, col) {
        this.file = file;
        this.offset = offset;
        this.line = line;
        this.col = col;
    }
    toString() { return `${this.file.url}@${this.line}:${this.col}`; }
}
export class ParseSourceFile {
    constructor(content, url) {
        this.content = content;
        this.url = url;
    }
}
export class ParseSourceSpan {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    toString() {
        return this.start.file.content.substring(this.start.offset, this.end.offset);
    }
}
export class ParseError {
    constructor(span, msg) {
        this.span = span;
        this.msg = msg;
    }
    toString() {
        var source = this.span.start.file.content;
        var ctxStart = this.span.start.offset;
        if (ctxStart > source.length - 1) {
            ctxStart = source.length - 1;
        }
        var ctxEnd = ctxStart;
        var ctxLen = 0;
        var ctxLines = 0;
        while (ctxLen < 100 && ctxStart > 0) {
            ctxStart--;
            ctxLen++;
            if (source[ctxStart] == "\n") {
                if (++ctxLines == 3) {
                    break;
                }
            }
        }
        ctxLen = 0;
        ctxLines = 0;
        while (ctxLen < 100 && ctxEnd < source.length - 1) {
            ctxEnd++;
            ctxLen++;
            if (source[ctxEnd] == "\n") {
                if (++ctxLines == 3) {
                    break;
                }
            }
        }
        let context = source.substring(ctxStart, this.span.start.offset) + '[ERROR ->]' +
            source.substring(this.span.start.offset, ctxEnd + 1);
        return `${this.msg} ("${context}"): ${this.span.start}`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VfdXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtNzNoMHVZRXYudG1wL2FuZ3VsYXIyL3NyYy9jb21waWxlci9wYXJzZV91dGlsLnRzIl0sIm5hbWVzIjpbIlBhcnNlTG9jYXRpb24iLCJQYXJzZUxvY2F0aW9uLmNvbnN0cnVjdG9yIiwiUGFyc2VMb2NhdGlvbi50b1N0cmluZyIsIlBhcnNlU291cmNlRmlsZSIsIlBhcnNlU291cmNlRmlsZS5jb25zdHJ1Y3RvciIsIlBhcnNlU291cmNlU3BhbiIsIlBhcnNlU291cmNlU3Bhbi5jb25zdHJ1Y3RvciIsIlBhcnNlU291cmNlU3Bhbi50b1N0cmluZyIsIlBhcnNlRXJyb3IiLCJQYXJzZUVycm9yLmNvbnN0cnVjdG9yIiwiUGFyc2VFcnJvci50b1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7SUFDRUEsWUFBbUJBLElBQXFCQSxFQUFTQSxNQUFjQSxFQUFTQSxJQUFZQSxFQUNqRUEsR0FBV0E7UUFEWEMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBaUJBO1FBQVNBLFdBQU1BLEdBQU5BLE1BQU1BLENBQVFBO1FBQVNBLFNBQUlBLEdBQUpBLElBQUlBLENBQVFBO1FBQ2pFQSxRQUFHQSxHQUFIQSxHQUFHQSxDQUFRQTtJQUFHQSxDQUFDQTtJQUVsQ0QsUUFBUUEsS0FBYUUsTUFBTUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsSUFBSUEsQ0FBQ0EsSUFBSUEsSUFBSUEsSUFBSUEsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7QUFDNUVGLENBQUNBO0FBRUQ7SUFDRUcsWUFBbUJBLE9BQWVBLEVBQVNBLEdBQVdBO1FBQW5DQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtRQUFTQSxRQUFHQSxHQUFIQSxHQUFHQSxDQUFRQTtJQUFHQSxDQUFDQTtBQUM1REQsQ0FBQ0E7QUFFRDtJQUNFRSxZQUFtQkEsS0FBb0JBLEVBQVNBLEdBQWtCQTtRQUEvQ0MsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBZUE7UUFBU0EsUUFBR0EsR0FBSEEsR0FBR0EsQ0FBZUE7SUFBR0EsQ0FBQ0E7SUFFdEVELFFBQVFBO1FBQ05FLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO0lBQy9FQSxDQUFDQTtBQUNIRixDQUFDQTtBQUVEO0lBQ0VHLFlBQW1CQSxJQUFxQkEsRUFBU0EsR0FBV0E7UUFBekNDLFNBQUlBLEdBQUpBLElBQUlBLENBQWlCQTtRQUFTQSxRQUFHQSxHQUFIQSxHQUFHQSxDQUFRQTtJQUFHQSxDQUFDQTtJQUVoRUQsUUFBUUE7UUFDTkUsSUFBSUEsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7UUFDMUNBLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBO1FBQ3RDQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxHQUFHQSxNQUFNQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqQ0EsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDL0JBLENBQUNBO1FBQ0RBLElBQUlBLE1BQU1BLEdBQUdBLFFBQVFBLENBQUNBO1FBQ3RCQSxJQUFJQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNmQSxJQUFJQSxRQUFRQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUVqQkEsT0FBT0EsTUFBTUEsR0FBR0EsR0FBR0EsSUFBSUEsUUFBUUEsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0E7WUFDcENBLFFBQVFBLEVBQUVBLENBQUNBO1lBQ1hBLE1BQU1BLEVBQUVBLENBQUNBO1lBQ1RBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUM3QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3BCQSxLQUFLQSxDQUFDQTtnQkFDUkEsQ0FBQ0E7WUFDSEEsQ0FBQ0E7UUFDSEEsQ0FBQ0E7UUFFREEsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDWEEsUUFBUUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDYkEsT0FBT0EsTUFBTUEsR0FBR0EsR0FBR0EsSUFBSUEsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0E7WUFDbERBLE1BQU1BLEVBQUVBLENBQUNBO1lBQ1RBLE1BQU1BLEVBQUVBLENBQUNBO1lBQ1RBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUMzQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3BCQSxLQUFLQSxDQUFDQTtnQkFDUkEsQ0FBQ0E7WUFDSEEsQ0FBQ0E7UUFDSEEsQ0FBQ0E7UUFFREEsSUFBSUEsT0FBT0EsR0FBR0EsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsRUFBRUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsWUFBWUE7WUFDakVBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEVBQUVBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO1FBRW5FQSxNQUFNQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQSxNQUFNQSxPQUFPQSxPQUFPQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQTtJQUMxREEsQ0FBQ0E7QUFDSEYsQ0FBQ0E7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYXJzZUxvY2F0aW9uIHtcbiAgY29uc3RydWN0b3IocHVibGljIGZpbGU6IFBhcnNlU291cmNlRmlsZSwgcHVibGljIG9mZnNldDogbnVtYmVyLCBwdWJsaWMgbGluZTogbnVtYmVyLFxuICAgICAgICAgICAgICBwdWJsaWMgY29sOiBudW1iZXIpIHt9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHsgcmV0dXJuIGAke3RoaXMuZmlsZS51cmx9QCR7dGhpcy5saW5lfToke3RoaXMuY29sfWA7IH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlU291cmNlRmlsZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb250ZW50OiBzdHJpbmcsIHB1YmxpYyB1cmw6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlU291cmNlU3BhbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGFydDogUGFyc2VMb2NhdGlvbiwgcHVibGljIGVuZDogUGFyc2VMb2NhdGlvbikge31cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0LmZpbGUuY29udGVudC5zdWJzdHJpbmcodGhpcy5zdGFydC5vZmZzZXQsIHRoaXMuZW5kLm9mZnNldCk7XG4gIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBhcnNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3BhbjogUGFyc2VTb3VyY2VTcGFuLCBwdWJsaWMgbXNnOiBzdHJpbmcpIHt9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICB2YXIgc291cmNlID0gdGhpcy5zcGFuLnN0YXJ0LmZpbGUuY29udGVudDtcbiAgICB2YXIgY3R4U3RhcnQgPSB0aGlzLnNwYW4uc3RhcnQub2Zmc2V0O1xuICAgIGlmIChjdHhTdGFydCA+IHNvdXJjZS5sZW5ndGggLSAxKSB7XG4gICAgICBjdHhTdGFydCA9IHNvdXJjZS5sZW5ndGggLSAxO1xuICAgIH1cbiAgICB2YXIgY3R4RW5kID0gY3R4U3RhcnQ7XG4gICAgdmFyIGN0eExlbiA9IDA7XG4gICAgdmFyIGN0eExpbmVzID0gMDtcblxuICAgIHdoaWxlIChjdHhMZW4gPCAxMDAgJiYgY3R4U3RhcnQgPiAwKSB7XG4gICAgICBjdHhTdGFydC0tO1xuICAgICAgY3R4TGVuKys7XG4gICAgICBpZiAoc291cmNlW2N0eFN0YXJ0XSA9PSBcIlxcblwiKSB7XG4gICAgICAgIGlmICgrK2N0eExpbmVzID09IDMpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGN0eExlbiA9IDA7XG4gICAgY3R4TGluZXMgPSAwO1xuICAgIHdoaWxlIChjdHhMZW4gPCAxMDAgJiYgY3R4RW5kIDwgc291cmNlLmxlbmd0aCAtIDEpIHtcbiAgICAgIGN0eEVuZCsrO1xuICAgICAgY3R4TGVuKys7XG4gICAgICBpZiAoc291cmNlW2N0eEVuZF0gPT0gXCJcXG5cIikge1xuICAgICAgICBpZiAoKytjdHhMaW5lcyA9PSAzKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY29udGV4dCA9IHNvdXJjZS5zdWJzdHJpbmcoY3R4U3RhcnQsIHRoaXMuc3Bhbi5zdGFydC5vZmZzZXQpICsgJ1tFUlJPUiAtPl0nICtcbiAgICAgICAgICAgICAgICAgIHNvdXJjZS5zdWJzdHJpbmcodGhpcy5zcGFuLnN0YXJ0Lm9mZnNldCwgY3R4RW5kICsgMSk7XG5cbiAgICByZXR1cm4gYCR7dGhpcy5tc2d9IChcIiR7Y29udGV4dH1cIik6ICR7dGhpcy5zcGFuLnN0YXJ0fWA7XG4gIH1cbn1cbiJdfQ==