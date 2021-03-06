// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

var ensure = require("./util/ensure.js");
var PageEdge = require("./descriptors/page_edge.js");
var Center = require("./descriptors/center.js");
var Assertable = require("./assertable.js");
var GenericSize = require("./descriptors/generic_size.js");

var Me = module.exports = function QPage(frame) {
	var QFrame = require("./q_frame.js");   // break circular dependency
	ensure.signature(arguments, [ QFrame ]);

	// properties
	this.top = PageEdge.top(frame);
	this.right = PageEdge.right(frame);
	this.bottom = PageEdge.bottom(frame);
	this.left = PageEdge.left(frame);

	this.width = GenericSize.create(this.left, this.right, "width of page");
	this.height = GenericSize.create(this.top, this.bottom, "height of page");

	this.center = Center.x(this.left, this.right, "center of page");
	this.middle = Center.y(this.top, this.bottom, "middle of page");
};
Assertable.extend(Me);
