(function() {

            //generate 6 "walls" for the eyes to be positioned on
            AFRAME.registerComponent('position-on-cube', {
                schema: {
                    scale: {
                        type: "number",
                        default: 5
                    },
                    divisions: {
                        type: "number",
                        default: 3
                    },
                    eyeDistance: {
                        type: "number",
                        default: .2
                    }

                },

                init: function() {
                    var scale = this.data.scale;
                    var divisions = this.data.divisions;
                    var eyeDistance = this.data.eyeDistance;
                    var parentEl = this.el.parentEl;

                    if(!parentEl.eyeVertexCount) {
                        parentEl.eyeVertexCount = 0;
                    }
                    if(!parentEl.eyePositionVertices) {

                        parentEl.eyePositionVertices = [];




                        var increment = 0.5
                        for(var i = -1; i < 1; i += increment) {
                            for(var j = -1; j < 1; j += increment) {
                                var vertexFront = {
                                    x: i,
                                    y: j,
                                    z: 1
                                };
                                var vertexBack = {
                                    x: i,
                                    y: j,
                                    z: -1
                                };
                                parentEl.eyePositionVertices.push(vertexFront)
                                parentEl.eyePositionVertices.push(vertexBack)
                            }

                        }

                        for(var y = -1; y < 1; y += increment) {
                            for(var z = -1; z < 1; z += increment) {
                                var vertexLeft = {
                                    x: 1.25,
                                    y: y,
                                    z: z
                                };
                                var vertexRight = {
                                    x: -1.25,
                                    y: y,
                                    z: z
                                };
                                parentEl.eyePositionVertices.push(vertexLeft)
                                parentEl.eyePositionVertices.push(vertexRight)
                            }

                        }

                        for(var i = -0.9; i < 0.9; i += increment) {
                            for(var j = -1; j < 1; j += increment) {
                                var vertexFront = {
                                    x: i,
                                    y: j,
                                    z: 1
                                };
                                var vertexBack = {
                                    x: i,
                                    y: j,
                                    z: -1
                                };
                                parentEl.eyePositionVertices.push(vertexFront)
                                parentEl.eyePositionVertices.push(vertexBack)
                            }

                        }
                        for(var y = -1; y < 1; y += increment) {
                            for(var z = -0.9; z < 0.9; z += increment) {
                                var vertexLeft = {
                                    x: 1.25,
                                    y: y,
                                    z: z
                                };
                                var vertexRight = {
                                    x: -1.25,
                                    y: y,
                                    z: z
                                };
                                parentEl.eyePositionVertices.push(vertexLeft)
                                parentEl.eyePositionVertices.push(vertexRight)
                            }

                        }
                        //top/bottom
                        for(var x = -1; x < 1; x += increment) {
                            for(var z = -1; z < 1; z += increment) {
                                var vertexTop = {
                                    x: x,
                                    y: 1.25,
                                    z: z
                                };
                                var vertexBottom = {
                                    x: x,
                                    y: -1.25,
                                    z: z
                                };
                                parentEl.eyePositionVertices.push(vertexTop)
                                parentEl.eyePositionVertices.push(vertexBottom)
                            }

                        }
                        for(var x = -0.9; x < 0.9; x += increment) {
                            for(var z = -1; z < 1; z += increment) {
                                var vertexTop = {
                                    x: x,
                                    y: 1.25,
                                    z: z
                                };
                                var vertexBottom = {
                                    x: x,
                                    y: -1.25,
                                    z: z
                                };
                                parentEl.eyePositionVertices.push(vertexTop)
                                parentEl.eyePositionVertices.push(vertexBottom)
                            }

                        }

                    }
                },
                update: function() {
                    var parentEl = this.el.parentEl;
                    var cubeToPositionTo = parentEl.eyePositionVertices;
                    if(parentEl.eyeVertexCount > cubeToPositionTo.length) {
                        parentEl.eyeVertexCount = 0;
                        return
                    }


                    var vertex = cubeToPositionTo[parentEl.eyeVertexCount];

                    parentEl.eyeVertexCount++;

                    var position = {
                        x: vertex.x,
                        y: vertex.y,
                        z: vertex.z
                    }

                    this.el.setAttribute('position', position);

                },
                multiple: true
            });




        })()