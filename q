                                    Table "public.resources"
   Column    |           Type           |                       Modifiers                        
-------------+--------------------------+--------------------------------------------------------
 id          | integer                  | not null default nextval('resources_id_seq'::regclass)
 url         | character varying(255)   | 
 title       | character varying(255)   | 
 description | character varying(255)   | 
 user_id     | integer                  | 
 topic_id    | integer                  | 
 created_at  | timestamp with time zone | not null default now()
 updated_at  | timestamp with time zone | not null default now()
Indexes:
    "resources_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "resources_topic_id_foreign" FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE
    "resources_user_id_foreign" FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
Referenced by:
    TABLE "comments" CONSTRAINT "comments_resource_id_foreign" FOREIGN KEY (resource_id) REFERENCES resources(id) ON DELETE CASCADE
    TABLE "pins" CONSTRAINT "pins_resource_id_foreign" FOREIGN KEY (resource_id) REFERENCES resources(id) ON DELETE CASCADE
    TABLE "ratings" CONSTRAINT "ratings_resource_id_foreign" FOREIGN KEY (resource_id) REFERENCES resources(id) ON DELETE CASCADE

