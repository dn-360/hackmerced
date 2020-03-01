CC = g++

all:
	$(CC) -std=c++11 -o a.exe main.cpp
	CFLAGS = -Iinc -Idep -w -std=c++11 -lboost_system -lboost_filesystem -lpthread
	_DEPS = main.h
clean:
	rm -f a.exe

