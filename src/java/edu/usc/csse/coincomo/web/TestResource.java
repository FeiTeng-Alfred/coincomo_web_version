/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.usc.csse.coincomo.web;

import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.PathParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;

/**
 * REST Web Service
 *
 * @author Zihao Zhu
 */
@Path("test")
public class TestResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of TestResource
     */
    public TestResource() {
    }

    /**
     * Retrieves representation of an instance of edu.usc.csse.coincomo.web.TestResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces("application/json")
    public String getJson() {
        //TODO return proper representation object
        return "{\n" +
"   \"System\":{\n" +
"      \"Name\": \"System1\"\n" +
"      }\n" +
"}";
    }

    /**
     * PUT method for updating or creating an instance of TestResource
     * @param content representation for the resource
     * @return an HTTP response with content of the updated or created resource.
     */
    @PUT
    @Consumes("application/json")
    public void putJson(String content) {
    }
}
