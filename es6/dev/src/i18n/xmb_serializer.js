import { isPresent, isBlank, RegExpWrapper } from 'angular2/src/facade/lang';
import { HtmlElementAst } from 'angular2/src/compiler/html_ast';
import { id } from './message';
import { HtmlParser } from 'angular2/src/compiler/html_parser';
import { ParseError } from 'angular2/src/compiler/parse_util';
let _PLACEHOLDER_REGEXP = RegExpWrapper.create(`\\<ph(\\s)+name=("(\\w)+")\\/\\>`);
const _ID_ATTR = "id";
const _MSG_ELEMENT = "msg";
const _BUNDLE_ELEMENT = "message-bundle";
export function serializeXmb(messages) {
    let ms = messages.map((m) => _serializeMessage(m)).join("");
    return `<message-bundle>${ms}</message-bundle>`;
}
export class XmbDeserializationResult {
    constructor(content, messages, errors) {
        this.content = content;
        this.messages = messages;
        this.errors = errors;
    }
}
export class XmbDeserializationError extends ParseError {
    constructor(span, msg) {
        super(span, msg);
    }
}
export function deserializeXmb(content, url) {
    let parser = new HtmlParser();
    let normalizedContent = _expandPlaceholder(content.trim());
    let parsed = parser.parse(normalizedContent, url);
    if (parsed.errors.length > 0) {
        return new XmbDeserializationResult(null, {}, parsed.errors);
    }
    if (_checkRootElement(parsed.rootNodes)) {
        return new XmbDeserializationResult(null, {}, [new XmbDeserializationError(null, `Missing element "${_BUNDLE_ELEMENT}"`)]);
    }
    let bundleEl = parsed.rootNodes[0]; // test this
    let errors = [];
    let messages = {};
    _createMessages(bundleEl.children, messages, errors);
    return (errors.length == 0) ?
        new XmbDeserializationResult(normalizedContent, messages, []) :
        new XmbDeserializationResult(null, {}, errors);
}
function _checkRootElement(nodes) {
    return nodes.length < 1 || !(nodes[0] instanceof HtmlElementAst) ||
        nodes[0].name != _BUNDLE_ELEMENT;
}
function _createMessages(nodes, messages, errors) {
    nodes.forEach((item) => {
        if (item instanceof HtmlElementAst) {
            let msg = item;
            if (msg.name != _MSG_ELEMENT) {
                errors.push(new XmbDeserializationError(item.sourceSpan, `Unexpected element "${msg.name}"`));
                return;
            }
            let id = _id(msg);
            if (isBlank(id)) {
                errors.push(new XmbDeserializationError(item.sourceSpan, `"${_ID_ATTR}" attribute is missing`));
                return;
            }
            messages[id] = msg.children;
        }
    });
}
function _id(el) {
    let ids = el.attrs.filter(a => a.name == _ID_ATTR);
    return ids.length > 0 ? ids[0].value : null;
}
function _serializeMessage(m) {
    let desc = isPresent(m.description) ? ` desc='${m.description}'` : "";
    return `<msg id='${id(m)}'${desc}>${m.content}</msg>`;
}
function _expandPlaceholder(input) {
    return RegExpWrapper.replaceAll(_PLACEHOLDER_REGEXP, input, (match) => {
        let nameWithQuotes = match[2];
        return `<ph name=${nameWithQuotes}></ph>`;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieG1iX3NlcmlhbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLTczaDB1WUV2LnRtcC9hbmd1bGFyMi9zcmMvaTE4bi94bWJfc2VyaWFsaXplci50cyJdLCJuYW1lcyI6WyJzZXJpYWxpemVYbWIiLCJYbWJEZXNlcmlhbGl6YXRpb25SZXN1bHQiLCJYbWJEZXNlcmlhbGl6YXRpb25SZXN1bHQuY29uc3RydWN0b3IiLCJYbWJEZXNlcmlhbGl6YXRpb25FcnJvciIsIlhtYkRlc2VyaWFsaXphdGlvbkVycm9yLmNvbnN0cnVjdG9yIiwiZGVzZXJpYWxpemVYbWIiLCJfY2hlY2tSb290RWxlbWVudCIsIl9jcmVhdGVNZXNzYWdlcyIsIl9pZCIsIl9zZXJpYWxpemVNZXNzYWdlIiwiX2V4cGFuZFBsYWNlaG9sZGVyIl0sIm1hcHBpbmdzIjoiT0FBTyxFQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFDLE1BQU0sMEJBQTBCO09BQ25FLEVBQVUsY0FBYyxFQUFDLE1BQU0sZ0NBQWdDO09BQy9ELEVBQVUsRUFBRSxFQUFDLE1BQU0sV0FBVztPQUM5QixFQUFDLFVBQVUsRUFBQyxNQUFNLG1DQUFtQztPQUNyRCxFQUFrQixVQUFVLEVBQUMsTUFBTSxrQ0FBa0M7QUFFNUUsSUFBSSxtQkFBbUIsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFDbkYsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQztBQUMzQixNQUFNLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQztBQUV6Qyw2QkFBNkIsUUFBbUI7SUFDOUNBLElBQUlBLEVBQUVBLEdBQUdBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFB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Q0FBQ0E7WUFDbkNBLElBQUlBLEdBQUdBLEdBQW1CQSxJQUFJQSxDQUFDQTtZQUUvQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsSUFBSUEsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzdCQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUNQQSxJQUFJQSx1QkFBdUJBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLHVCQUF1QkEsR0FBR0EsQ0FBQ0EsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RGQSxNQUFNQSxDQUFDQTtZQUNUQSxDQUFDQTtZQUVEQSxJQUFJQSxFQUFFQSxHQUFHQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNsQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hCQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUNQQSxJQUFJQSx1QkFBdUJBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLElBQUlBLFFBQVFBLHdCQUF3QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hGQSxNQUFNQSxDQUFDQTtZQUNUQSxDQUFDQTtZQUVEQSxRQUFRQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQSxRQUFRQSxDQUFDQTtRQUM5QkEsQ0FBQ0E7SUFDSEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7QUFDTEEsQ0FBQ0E7QUFFRCxhQUFhLEVBQWtCO0lBQzdCQyxJQUFJQSxHQUFHQSxHQUFHQSxFQUFFQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxRQUFRQSxDQUFDQSxDQUFDQTtJQUNuREEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0E7QUFDOUNBLENBQUNBO0FBRUQsMkJBQTJCLENBQVU7SUFDbkNDLElBQUlBLElBQUlBLEdBQUdBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBLEdBQUdBLFVBQVVBLENBQUNBLENBQUNBLFdBQVdBLEdBQUdBLEdBQUdBLEVBQUVBLENBQUNBO0lBQ3RFQSxNQUFNQSxDQUFDQSxZQUFZQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQSxPQUFPQSxRQUFRQSxDQUFDQTtBQUN4REEsQ0FBQ0E7QUFFRCw0QkFBNEIsS0FBYTtJQUN2Q0MsTUFBTUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxLQUFLQSxFQUFFQSxDQUFDQSxLQUFLQTtRQUNoRUEsSUFBSUEsY0FBY0EsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDOUJBLE1BQU1BLENBQUNBLFlBQVlBLGNBQWNBLFFBQVFBLENBQUNBO0lBQzVDQSxDQUFDQSxDQUFDQSxDQUFDQTtBQUNMQSxDQUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNQcmVzZW50LCBpc0JsYW5rLCBSZWdFeHBXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtIdG1sQXN0LCBIdG1sRWxlbWVudEFzdH0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL2h0bWxfYXN0JztcbmltcG9ydCB7TWVzc2FnZSwgaWR9IGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQge0h0bWxQYXJzZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci9odG1sX3BhcnNlcic7XG5pbXBvcnQge1BhcnNlU291cmNlU3BhbiwgUGFyc2VFcnJvcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3BhcnNlX3V0aWwnO1xuXG5sZXQgX1BMQUNFSE9MREVSX1JFR0VYUCA9IFJlZ0V4cFdyYXBwZXIuY3JlYXRlKGBcXFxcPHBoKFxcXFxzKStuYW1lPShcIihcXFxcdykrXCIpXFxcXC9cXFxcPmApO1xuY29uc3QgX0lEX0FUVFIgPSBcImlkXCI7XG5jb25zdCBfTVNHX0VMRU1FTlQgPSBcIm1zZ1wiO1xuY29uc3QgX0JVTkRMRV9FTEVNRU5UID0gXCJtZXNzYWdlLWJ1bmRsZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplWG1iKG1lc3NhZ2VzOiBNZXNzYWdlW10pOiBzdHJpbmcge1xuICBsZXQgbXMgPSBtZXNzYWdlcy5tYXAoKG0pID0+IF9zZXJpYWxpemVNZXNzYWdlKG0pKS5qb2luKFwiXCIpO1xuICByZXR1cm4gYDxtZXNzYWdlLWJ1bmRsZT4ke21zfTwvbWVzc2FnZS1idW5kbGU+YDtcbn1cblxuZXhwb3J0IGNsYXNzIFhtYkRlc2VyaWFsaXphdGlvblJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb250ZW50OiBzdHJpbmcsIHB1YmxpYyBtZXNzYWdlczoge1trZXk6IHN0cmluZ106IEh0bWxBc3RbXX0sXG4gICAgICAgICAgICAgIHB1YmxpYyBlcnJvcnM6IFBhcnNlRXJyb3JbXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFhtYkRlc2VyaWFsaXphdGlvbkVycm9yIGV4dGVuZHMgUGFyc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU291cmNlU3BhbiwgbXNnOiBzdHJpbmcpIHsgc3VwZXIoc3BhbiwgbXNnKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemVYbWIoY29udGVudDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IFhtYkRlc2VyaWFsaXphdGlvblJlc3VsdCB7XG4gIGxldCBwYXJzZXIgPSBuZXcgSHRtbFBhcnNlcigpO1xuICBsZXQgbm9ybWFsaXplZENvbnRlbnQgPSBfZXhwYW5kUGxhY2Vob2xkZXIoY29udGVudC50cmltKCkpO1xuICBsZXQgcGFyc2VkID0gcGFyc2VyLnBhcnNlKG5vcm1hbGl6ZWRDb250ZW50LCB1cmwpO1xuXG4gIGlmIChwYXJzZWQuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gbmV3IFhtYkRlc2VyaWFsaXphdGlvblJlc3VsdChudWxsLCB7fSwgcGFyc2VkLmVycm9ycyk7XG4gIH1cblxuICBpZiAoX2NoZWNrUm9vdEVsZW1lbnQocGFyc2VkLnJvb3ROb2RlcykpIHtcbiAgICByZXR1cm4gbmV3IFhtYkRlc2VyaWFsaXphdGlvblJlc3VsdChcbiAgICAgICAgbnVsbCwge30sIFtuZXcgWG1iRGVzZXJpYWxpemF0aW9uRXJyb3IobnVsbCwgYE1pc3NpbmcgZWxlbWVudCBcIiR7X0JVTkRMRV9FTEVNRU5UfVwiYCldKTtcbiAgfVxuXG4gIGxldCBidW5kbGVFbCA9IDxIdG1sRWxlbWVudEFzdD5wYXJzZWQucm9vdE5vZGVzWzBdOyAgLy8gdGVzdCB0aGlzXG4gIGxldCBlcnJvcnMgPSBbXTtcbiAgbGV0IG1lc3NhZ2VzOiB7W2tleTogc3RyaW5nXTogSHRtbEFzdFtdfSA9IHt9O1xuXG4gIF9jcmVhdGVNZXNzYWdlcyhidW5kbGVFbC5jaGlsZHJlbiwgbWVzc2FnZXMsIGVycm9ycyk7XG5cbiAgcmV0dXJuIChlcnJvcnMubGVuZ3RoID09IDApID9cbiAgICAgICAgICAgICBuZXcgWG1iRGVzZXJpYWxpemF0aW9uUmVzdWx0KG5vcm1hbGl6ZWRDb250ZW50LCBtZXNzYWdlcywgW10pIDpcbiAgICAgICAgICAgICBuZXcgWG1iRGVzZXJpYWxpemF0aW9uUmVzdWx0KG51bGwsIDx7W2tleTogc3RyaW5nXTogSHRtbEFzdFtdfT57fSwgZXJyb3JzKTtcbn1cblxuZnVuY3Rpb24gX2NoZWNrUm9vdEVsZW1lbnQobm9kZXM6IEh0bWxBc3RbXSk6IGJvb2xlYW4ge1xuICByZXR1cm4gbm9kZXMubGVuZ3RoIDwgMSB8fCAhKG5vZGVzWzBdIGluc3RhbmNlb2YgSHRtbEVsZW1lbnRBc3QpIHx8XG4gICAgICAgICAoPEh0bWxFbGVtZW50QXN0Pm5vZGVzWzBdKS5uYW1lICE9IF9CVU5ETEVfRUxFTUVOVDtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZU1lc3NhZ2VzKG5vZGVzOiBIdG1sQXN0W10sIG1lc3NhZ2VzOiB7W2tleTogc3RyaW5nXTogSHRtbEFzdFtdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IFBhcnNlRXJyb3JbXSk6IHZvaWQge1xuICBub2Rlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBIdG1sRWxlbWVudEFzdCkge1xuICAgICAgbGV0IG1zZyA9IDxIdG1sRWxlbWVudEFzdD5pdGVtO1xuXG4gICAgICBpZiAobXNnLm5hbWUgIT0gX01TR19FTEVNRU5UKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKFxuICAgICAgICAgICAgbmV3IFhtYkRlc2VyaWFsaXphdGlvbkVycm9yKGl0ZW0uc291cmNlU3BhbiwgYFVuZXhwZWN0ZWQgZWxlbWVudCBcIiR7bXNnLm5hbWV9XCJgKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGlkID0gX2lkKG1zZyk7XG4gICAgICBpZiAoaXNCbGFuayhpZCkpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goXG4gICAgICAgICAgICBuZXcgWG1iRGVzZXJpYWxpemF0aW9uRXJyb3IoaXRlbS5zb3VyY2VTcGFuLCBgXCIke19JRF9BVFRSfVwiIGF0dHJpYnV0ZSBpcyBtaXNzaW5nYCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG1lc3NhZ2VzW2lkXSA9IG1zZy5jaGlsZHJlbjtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBfaWQoZWw6IEh0bWxFbGVtZW50QXN0KTogc3RyaW5nIHtcbiAgbGV0IGlkcyA9IGVsLmF0dHJzLmZpbHRlcihhID0+IGEubmFtZSA9PSBfSURfQVRUUik7XG4gIHJldHVybiBpZHMubGVuZ3RoID4gMCA/IGlkc1swXS52YWx1ZSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIF9zZXJpYWxpemVNZXNzYWdlKG06IE1lc3NhZ2UpOiBzdHJpbmcge1xuICBsZXQgZGVzYyA9IGlzUHJlc2VudChtLmRlc2NyaXB0aW9uKSA/IGAgZGVzYz0nJHttLmRlc2NyaXB0aW9ufSdgIDogXCJcIjtcbiAgcmV0dXJuIGA8bXNnIGlkPScke2lkKG0pfScke2Rlc2N9PiR7bS5jb250ZW50fTwvbXNnPmA7XG59XG5cbmZ1bmN0aW9uIF9leHBhbmRQbGFjZWhvbGRlcihpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIFJlZ0V4cFdyYXBwZXIucmVwbGFjZUFsbChfUExBQ0VIT0xERVJfUkVHRVhQLCBpbnB1dCwgKG1hdGNoKSA9PiB7XG4gICAgbGV0IG5hbWVXaXRoUXVvdGVzID0gbWF0Y2hbMl07XG4gICAgcmV0dXJuIGA8cGggbmFtZT0ke25hbWVXaXRoUXVvdGVzfT48L3BoPmA7XG4gIH0pO1xufVxuIl19