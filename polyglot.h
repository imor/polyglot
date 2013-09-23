#ifndef POLYGLOT_H
#define POLYGLOT_H

#include <node.h>
#include <string>

class Polyglot : public node::ObjectWrap {
public:
    static v8::Persistent<v8::FunctionTemplate> constructor;
    static void Init(v8::Handle<v8::Object> target);

protected:
    Polyglot(std::string bookFile);

    static v8::Handle<v8::Value> New(const v8::Arguments& args);
    static v8::Handle<v8::Value> FindBest(const v8::Arguments& args);
    static v8::Handle<v8::Value> FindFirst(const v8::Arguments& args);
    static v8::Handle<v8::Value> Hash(const v8::Arguments& args);

private:
    std::string bookFile;
};

#endif
