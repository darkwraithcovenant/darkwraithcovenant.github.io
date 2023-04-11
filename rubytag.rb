# Declare a module named Jekyll. A module is a way to group related classes and methods together.
module Jekyll
    # Declare a class named TagIndex that inherits from the Page class. A class is a blueprint for creating objects with certain attributes and behaviors. The Page class is a built-in Jekyll class that represents a static page in the site.
    class TagIndex < Page
      # Define an initialize method that takes four parameters: site, base, dir, and tag. This method is called when a new object of this class is created. It sets up the initial state of the object by assigning values to instance variables. Instance variables are prefixed with @ and are accessible within the object.
      def initialize(site, base, dir, tag)
        # Assign the site parameter to the @site instance variable. The site parameter is an object of the Site class, which represents the whole Jekyll site.
        @site = site
        
        # Assign the base parameter to the @base instance variable. The base parameter is a string that represents the source directory of the site.
        @base = base
        # Assign the dir parameter to the @dir instance variable. The dir parameter is a string that represents the subdirectory of the tag index page.
        @dir = dir
        # Assign 'index.html' to the @name instance variable. This is the filename of the tag index page.
        @name = 'index.html'
        # Call the process method inherited from the Page class with the @name instance variable as an argument. This method sets some other instance variables such as basename, ext, and url based on the filename.
        self.process(@name)
        # Call the read_yaml method inherited from the Page class with two arguments: File.join(base, '_layouts') and 'tag_index.html'. This method reads a YAML file from the given path and assigns its data to the @data instance variable. The YAML file is a layout template for rendering the tag index page.
        self.read_yaml(File.join(base, '_layouts'), 'tag_index.html')
        # Assign the tag parameter to the 'tag' key in the @data hash. The tag parameter is a string that represents the name of the tag.
        self.data['tag'] = tag
        # Get the value of 'tag_title_prefix' from the site configuration hash or use a default value if it doesn't exist. The site configuration hash contains various settings for customizing the site behavior and appearance.
        tag_title_prefix = site.config['tag_title_prefix'] || 'Posts Tagged &ldquo;'
        # Get the value of 'tag_title_suffix' from the site configuration hash or use a default value if it doesn't exist.
        tag_title_suffix = site.config['tag_title_suffix'] || '&rdquo;'
        # Assign a string composed of the tag title prefix, tag name, and tag title suffix to the 'title' key in the @data hash. This is the title of the tag index page.
        self.data['title'] = "#{tag_title_prefix}#{tag}#{tag_title_suffix}"
      end
    end
    # Declare a class named TagGenerator that inherits from the Generator class. The Generator class is a built-in Jekyll class that allows creating custom generators for generating additional pages or content based on some logic.
    class TagGenerator < Generator
      # Set a class variable named safe to true. Class variables are prefixed with @@ and are shared among all objects of this class. A safe generator is one that doesn't modify existing files or directories in the site source or destination.
      safe true
      # Define a generate method that takes one parameter: site. This method is called by Jekyll when generating the site. It contains the logic for creating additional pages or content based on some criteria.
      def generate(site)
        # Check if there is a layout template named 'tag_index' in the site layouts hash. The layouts hash contains all layout templates available for rendering pages.
        if site.layouts.key? 'tag_index'
          # Get the value of 'tag_dir' from the site configuration hash or use a default value if it doesn't exist. This is the directory where tag index pages will be generated.
          dir = site.config['tag_dir'] || 'tag'
            # Loop through each tag in the site
site.tags.keys.each do |tag|
  # Create a subdirectory for the tag under the specified directory
  write_tag_index(site, File.join(dir, tag), tag) # Call a method to write an index page for the tag
end
end
end
# Define a method to write an index page for a tag
def write_tag_index(site, dir, tag)
  # Create a new TagIndex object with the site, source, directory and tag parameters
  index = TagIndex.new(site, site.source, dir, tag)
  # Render the index page using the site layouts and payload
  index.render(site.layouts, site.site_payload)
  # Write the index page to the destination folder
  index.write(site.dest)
  # Add the index page to the site pages array
  site.pages << index
end
end
end