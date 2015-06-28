---
layout: post
title: Making Travis Happy With Swift Tests
categories:
tags:
image:
---

Recently I've wanted to add some tests to the app I focus on the most [Hockey Playoffs](https://itunes.apple.com/us/app/hockey-playoffs/id835425060). I started to write the tests in Objective-C since the project was written in Objective-C which went fine. The goal of these tests was to test out [Travis CI](https://travis-ci.org) and [Coveralls](https://coveralls.io) and see how they work. After setting up my project to work with travis and coveralls, I thought that I should rewrite the tests in Swift and over time move the codebase to Swift as well. Sounds kind of easy right? It ended up being a little trickier than expected to make travis happy and run my tests.

I began by rewriting all the tests in Swift which was fairly simple. I then added a bridging header to the test target with all the proper Objective-C headers for the tests. Again, simple. I pressed `cmd + u` to run all the test and it worked locally. Great! So I committed and pushed the changes and left the computer. A couple minutes later I got an email from travis saying my [build had failed](https://travis-ci.org/petester42/hockey-playoffs/builds/68104371). Hmm, odd. It can't find the files in the bridging header. I tried a bunch of stuff and nothing seemed to fix the build. So I reverted back to the Objective-C tests and left it for the day. Bummer. I really wanted to do my tests in Swift.

Today I tried to move to Swift tests for an Objective-C project again and may have found a solution to the problem. What I did was add an [empty Objective-C test](https://github.com/petester42/hockey-playoffs/commit/c200f3a59609eb1865d9f6c5479fb7c75bdf8526) to my test target and voila! The build succeeds on travis now and the [Swift tests run](https://travis-ci.org/petester42/hockey-playoffs/builds/68648798). If anyone knows how to make travis happy with only Swift tests in an Objective-C project I'd love to hear it. I would love to not have an empty test just to make the build succeed.
