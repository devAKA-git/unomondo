<?php
/**
 * @package 	WordPress
 * @subpackage 	EcoNature
 * @version		1.3.8
 * 
 * Blog Archives Page Template
 * Created by CMSMasters
 * 
 */


get_header();


list($cmsms_layout) = cmsms_theme_page_layout_scheme();


echo '<!--_________________________ Start Content _________________________ -->' . "\n";


if ($cmsms_layout == 'r_sidebar') {
	echo '<div class="content entry" role="main">' . "\n\t";
} elseif ($cmsms_layout == 'l_sidebar') {
	echo '<div class="content entry fr" role="main">' . "\n\t";
} else {
	echo '<div class="middle_content entry" role="main">';
}


echo '<div class="blog">' . "\n";


if (!have_posts()) : 
	echo '<h2>' . esc_html__('No posts found', 'econature') . '</h2>';
else : 
	while (have_posts()) : the_post();
		if (get_post_type() == 'post') {
			if (get_post_format() != '') {
				get_template_part('framework/postType/blog/page/default/' . get_post_format());
			} else {
				get_template_part('framework/postType/blog/page/default/standard');
			}
		} else {
			?>
			<article id="post-<?php the_ID(); ?>" <?php post_class('post cmsms_default_type'); ?>>
				<div class="cmsms_post_info entry-meta">
					<span class="cmsms_post_format_img <?php echo (get_post_type() == 'profile' ? 'cmsms-icon-user-7' : 'cmsms-icon-pencil-7'); ?>"></span>
					<?php 
					echo '<abbr class="published cmsms_post_date" title="' . esc_attr(get_the_date()) . '">' . 
						'<span class="cmsms_day_mon">' . get_the_date('d') . '.' . get_the_date('m') . '</span>' . 
						'<span class="cmsms_year">' . get_the_date('Y') . '</span>' . 
					'</abbr>'; 
					?>
				</div>
				<div class="cmsms_post_cont">
				<?php
					if (!post_password_required() && has_post_thumbnail()) {
						cmsms_thumb(get_the_ID(), 'post-thumbnail', true, false, true, false, true, true, false);
					}
					
					
					echo '<header class="cmsms_post_header entry-header">' . 
						'<h3 class="cmsms_post_title cmsms_h1_font_style entry-title">' . 
							'<a href="' . esc_url(get_permalink()) . '">' . cmsms_title(get_the_ID(), false) . '</a>' . 
						'</h3>' . 
					'</header>' . 
					'<div class="cmsms_post_cont_info entry-meta">' . 
						'<span class="cmsms_post_user_name">' . 
							esc_html__('By', 'econature') . ' ' . 
							'<a href="' . esc_url(get_author_posts_url(get_the_author_meta('ID'))) . '" rel="author" title="' . esc_attr__('Posts by', 'econature') . ' ' . esc_attr(get_the_author_meta('display_name')) . '">' . get_the_author_meta('display_name') . '</a>' . 
						'</span>';
					
					
					if (get_post_type() == 'project' && get_the_terms(get_the_ID(), 'pj-categs')) {
						echo '<span class="cmsms_post_category">' . 
							esc_html__('In', 'econature') . ' ' . 
							get_the_term_list(get_the_ID(), 'pj-categs', '', ', ', '') . 
						'</span>';
					} elseif (get_post_type() == 'profile' && get_the_terms(get_the_ID(), 'pl-categs')) {
						echo '<span class="cmsms_post_category">' . 
							esc_html__('In', 'econature') . ' ' . 
							get_the_term_list(get_the_ID(), 'pl-categs', '', ', ', '') . 
						'</span>';
					}
					
					
					if (get_post_type() == 'project' && get_the_terms(get_the_ID(), 'pj-tags')) {
						echo '<span class="cmsms_post_tags">' . 
							esc_html__('Tags', 'econature') . ' ' . 
							get_the_term_list(get_the_ID(), 'pj-tags', '', ', ', '') . 
						'</span>';
					}
					
					
					echo '</div>' . 
					cmsms_divpdel('<div class="cmsms_post_content entry-content">' . "\n" . 
						wpautop(theme_excerpt(20, false)) . 
					'</div>' . "\n") . 
					'<footer class="cmsms_post_footer entry-meta">' . 
						'<div class="cmsms_post_meta_info">' . 
							(get_post_type() == 'project' ? cmsmsLike(false) : '') . 
							(comments_open() ? '<a class="cmsms_post_comments cmsms-icon-comment-6" href="' . esc_url(get_comments_link()) . '" title="' . esc_attr__('Comment on', 'econature') . ' ' . esc_attr(get_the_title()) . '">' . get_comments_number() . '</a>' : '') . 
						'</div>' . 
						'<a class="button cmsms_post_read_more" href="' . esc_url(get_permalink(get_the_ID())) . '">' . esc_html__('Read More', 'econature') . '</a>' . 
					'</footer>';
				?>
				</div>
			</article>
			<?php
		}
	endwhile;
	
	
	echo cmsms_pagination();
endif;


echo '</div>' . "\n" . 
'</div>' . "\n" . 
'<!-- _________________________ Finish Content _________________________ -->' . "\n\n";


if ($cmsms_layout == 'r_sidebar') {
	echo "\n" . '<!-- _________________________ Start Sidebar _________________________ -->' . "\n" . 
	'<div class="sidebar" role="complementary">' . "\n";
	
	get_sidebar();
	
	echo "\n" . '</div>' . "\n" . 
	'<!-- _________________________ Finish Sidebar _________________________ -->' . "\n";
} elseif ($cmsms_layout == 'l_sidebar') {
	echo "\n" . '<!-- _________________________ Start Sidebar _________________________ -->' . "\n" . 
	'<div class="sidebar fl" role="complementary">' . "\n";
	
	get_sidebar();
	
	echo "\n" . '</div>' . "\n" . 
	'<!-- _________________________ Finish Sidebar _________________________ -->' . "\n";
}


get_footer();

